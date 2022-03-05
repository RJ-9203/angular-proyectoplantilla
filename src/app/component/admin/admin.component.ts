import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/service/rol.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any
  rol: any
  modules: any

  constructor(private storageService: StorageService,
             private rolService: RolService) { }

  ngOnInit(): void {
    if(this.storageService.statusModules)
     this.getInfo()
    else
     this.getModules()
  }
  
  getInfo(){
    this.user = this.storageService.user
    this.rol = this.storageService.rol
    this.modules = this.storageService.modules
  }

  getModules(){
    this.rolService.getRolByName(sessionStorage.getItem('rol')).subscribe((res:any)=>{
      this.modules = res[0].modulo
    })
  }

}