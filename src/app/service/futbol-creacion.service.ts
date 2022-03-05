import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FutbolCreacionService {

  readonly URL = config.url
  config = config
  constructor(private http:HttpClient) { }

  equipo1(data:any){
    return this.http.post(this.URL + "/api/equipo_1/",  data)
  }
  consultarE1(){
    return this.http.get(this.config.url+"/api/equipo_1/")
  }
  consultarE2(){
    return this.http.get(this.config.url+"/api/equipo_2/")
  }
  equipo2(data:any){
    return this.http.post(this.URL + "/api/equipo_2/",  data)
  }
  enviarJ(data:any){
    return this.http.post(this.URL + "/api/futbol-creacion/",  data)
  }
  save(data: any){
    return this.http.post(this.config.url+"/api/futbol-creacion/", data)
  }

  update(data: any){
    return this.http.put(this.config.url+"/api/futbol-creacion/", data)
  }

  get(){
      return this.http.get(this.config.url+"/api/futbol-creacion/")
  }

  getById(id: any | string ){
    return this.http.get(this.config.url+`/api/futbol-creacion/${id}`)
  }

  search(data: any){
    return this.http.post(this.config.url+"/api/futbol-creacion/search", data)
  }

  findById(data: any){
    return this.http.post(this.config.url+"/api/futbol-creacion/findById", data)
  }

  deleteById(id: any | string ){
    return this.http.delete(this.config.url+`/api/futbol-creacion/${id}`)
  }
  deleteEq1(id: any | string ){
    return this.http.delete(this.config.url+`/api/equipo_1/${id}`)
  }
  deleteEq2(id: any | string ){
    return this.http.delete(this.config.url+`/api/equipo_2/${id}`)
  }

}