import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  config = config
  constructor(private http: HttpClient) {

  }

  upload(file: any){
    const formData = new FormData();
    //append => adicionando
    formData.append("file", file);
    return this.http.post(this.config.url+"/api/upload/",formData)
  }
}