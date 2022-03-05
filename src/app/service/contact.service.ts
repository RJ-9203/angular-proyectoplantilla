import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly URL = config.url
  config = config
  constructor(private http:HttpClient) { }

  enviarM(data:any){
    return this.http.post(this.URL + "/api/contact",  data)
  }
  save(data: any){
    return this.http.post(this.config.url+"/api/contact/", data)
  }

  update(data: any){
    return this.http.put(this.config.url+"/api/contact/", data)
  }

  get(){
      return this.http.get(this.config.url+"/api/contact/")
  }

  getById(id: any | string ){
    return this.http.get(this.config.url+`/api/contact/${id}`)
  }

  search(data: any){
    return this.http.post(this.config.url+"/api/contact/search", data)
  }

  findById(data: any){
    return this.http.post(this.config.url+"/api/contact/findById", data)
  }

  deleteById(id: any | string ){
    return this.http.delete(this.config.url+`/api/contact/${id}`)
  }

}