import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from 'src/app/config/config';
import { ContactService } from 'src/app/service/contact.service';
import { WebSocketsService } from 'src/app/service/websocket';
import { io } from 'socket.io-client';


const socket = io(config.url)

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup
  name: AbstractControl
  email: AbstractControl
  subject: AbstractControl
  phone: AbstractControl
  message: AbstractControl

  config = config

  constructor(private fb: FormBuilder, private cService: ContactService, private webSocket:WebSocketsService) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      subject: ["", Validators.required],
      phone: ["", Validators.required],
      message: ["", Validators.required]
    })
    this.name = this.form.controls["name"]
    this.email = this.form.controls["email"]
    this.subject = this.form.controls["subject"]
    this.phone = this.form.controls["phone"]
    this.message = this.form.controls["message"]
    this.obtenerRespuesta()
  }

  ngOnInit(): void {
  }
  get getForm() {
    return this.form.controls
  }
  enviar() {
    if (this.form.invalid)

      return

    console.log(this.form.value)
    this.webSocket.enviarM(this.form.value)
    this.cService.enviarM(this.form.value).subscribe((res: any) => {
      if (res.status) {

      }
    })
  }
  obtenerRespuesta(){
    socket.on('respuesta',(data)=>{
      console.log(data)
    })
  }
}
