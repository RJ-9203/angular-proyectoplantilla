import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from 'src/app/config/config';
import { FutbolCreacionService } from 'src/app/service/futbol-creacion.service';
import { WebSocketsService } from 'src/app/service/websocket';
import { io } from 'socket.io-client';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth.service';
// import { StorageService } from 'src/app/service/storage.service';

const socket = io(config.url)


@Component({
  selector: 'app-futbol-creacion',
  templateUrl: './futbol-creacion.component.html',
  styleUrls: ['./futbol-creacion.component.css']
})
export class FutbolCreacionComponent implements OnInit {

  equipo1 = false
  equipo2 = false
  form: FormGroup
  nombre: AbstractControl
  posicion: AbstractControl
  fdn: AbstractControl
  // user: AbstractControl
  // password: AbstractControl
  // submited = false

  config = config

  posiciones = [
    { posicion: "Portero" },
    { posicion: "Defensa" },
    { posicion: "Delantero" },
    { posicion: "Mediocampista" }
  ]
  post = "Portero"

  updatedSend: any
  reverseData: any
  listJugadores: any[] = []

  equipo_1: any[] = []
  equipo_2: any[] = []
  constructor(private fb: FormBuilder,
    private cService: FutbolCreacionService,
    private webSocket: WebSocketsService,
    // private authService: AuthService,
    // private storagService: StorageService,
    // private route: Router
  ) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      posicion: ["", Validators.required],
      fdn: ["", Validators.required],
      // user: ['', Validators.required],
      // password: ['', Validators.required]
    })
    this.nombre = this.form.controls["nombre"]
    this.posicion = this.form.controls["posicion"]
    this.fdn = this.form.controls["fdn"]

    this.obtenerRespuesta()
    // this.user = this.form.controls['user']
    // this.password = this.form.controls['password']
  }

  ngOnInit(): void {
    this.getJugador()
  }

  get getForm() {
    return this.form.controls
  }

  enviar() {
    this.form.get('posicion')?.setValue(this.post)
    this.form.get('fdn')
    if (this.form.invalid)
      return

    console.log(this.form.value)
    // this.webSocket.enviarJ(this.form.value)
    this.cService.enviarJ(this.form.value).subscribe((res: any) => {
      if (res.status) {

      }
    })
  }

  getValue(item: any) {
    this.post = item.posicion
    console.log(item)
  }

  obtenerRespuesta() {
    socket.on('respuesta', (data) => {
      console.log(data)
    })
  }

  getJugador() {
    this.cService.get().subscribe((res: any) => {
      res.forEach((i: any) => {
        i.textAction = ""
      });
      this.listJugadores = res
    })
  }
  getE1() {
    this.cService.get().subscribe((res: any) => {
      res.forEach((i: any) => {
        i.textAction = ""
      });
      this.equipo_1 = res
    })
  }
  getE2() {
    this.cService.get().subscribe((res: any) => {
      res.forEach((i: any) => {
        i.textAction = ""
      });
      this.equipo_2 = res
    })
  }

  search(event: any) {
    this.cService.search({ name: event.target.value }).
      subscribe((res: any) => {
        res.forEach((i: any) => {
          i.status = false
        });
        this.listJugadores = res
      })
  }

  reset(index: any) {
    console.log(this.reverseData)
    //this.listContact[index] =  this.reverseData
    this.listJugadores[index]['status'] = false
    this.updatedSend = null
  }

  // edit(item: any) {
  //   if (typeof this.updatedSend === "object" && this.updatedSend != null) {
  //     this.update()
  //   } else {
  //     this.listJugadores.forEach(i => {
  //       i.status = false
  //       i.textAction = "Editar"
  //       if (i._id == item._id) {
  //         this.reverseData = i
  //         i.status = true
  //         i.textAction = "Guardar"
  //       }
  //     });
  //   }
  // }

  // change(item: any, event: any, index: any, propiedad: any) {
  //   this.listJugadores[index][propiedad] = event.target.value
  //   this.updatedSend = this.listJugadores[index]
  // }

  update() {
    this.cService.update(this.updatedSend).subscribe((res: any) => {
      console.log(res)
      this.updatedSend = null
    })
  }

  delete(_id: string) {
    console.log(_id)
    this.cService.deleteById(_id).subscribe((res: any) => {
      this.getJugador()
    })
  }
  deleteE1(_id: string) {
    console.log(_id)
    this.cService.deleteEq1(_id).subscribe((res: any) => {
    this.getE1()
    })
  }
  deleteE2(_id: string) {
    console.log(_id)
    this.cService.deleteEq2(_id).subscribe((res: any) => {
      this.getE2()
    })
  }

  e1(item: any) {
    console.log(item)
    this.equipo_1.push(item)
    // this.equipo1 = true
    // this.listJugadores[index] = event.target.value
    // this.updatedSend = this.listJugadores[index]
    // console.log(item)
    this.cService.equipo1(item).subscribe((res: any) => {
    if (res.status) {
      this.cService.consultarE1().subscribe((res: any) => {
        this.equipo_1 = res
      })
    }
    })
  }

  e2(item: any) {
    console.log(item)
    this.equipo_2.push(item)
    // this.equipo2 = true
    // this.listJugadores[index] = event.target.value
    // this.updatedSend = this.listJugadores[index]
    // console.log(item)
    this.cService.equipo2(item).subscribe((res: any) => {
      if (res.status) {
        this.cService.consultarE2().subscribe((res: any) => {
          this.equipo_2 = res
        })
      }
    })
  }

  // auth() {
  //   this.submited = true
  //   if (this.form.invalid)
  //     return

  //   this.authService.auth(this.form.value).subscribe((res: any) => {
  //     if (res.status) {
  //       this.storagService.modules = res.modules.modulo;
  //       this.storagService.user = res.userFound.user
  //       this.storagService.rol = res.rol
  //       this.storagService._id = res._id
  //       sessionStorage.setItem('token', res.token)
  //       this.route.navigate(['/admin'])
  //     }
  //   })
  // }

}



