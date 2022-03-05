import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-login',
  //template: `<h1>Hola<h1>`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup
  user: AbstractControl
  password: AbstractControl
  submited = false

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private storagService: StorageService,
              private route: Router
      ) { 
      this.form = this.fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      })

      this.user = this.form.controls['user']
      this.password = this.form.controls['password']
   }

   ngOnInit(): void {
  
   }

   get f(){
     return this.form.controls
   }

   auth(){
      this.submited = true
      if(this.form.invalid)
       return

      this.authService.auth(this.form.value).subscribe((res:any)=>{
        if(res.status){
          this.storagService.modules = res.modules.modulo;
          this.storagService.user = res.userFound.user
          this.storagService.rol = res.rol
          this.storagService._id = res._id
          sessionStorage.setItem('token',res.token)
          this.route.navigate(['/futbol-creacion'])
        }
      })
   }
}