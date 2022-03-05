import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  config = config
  constructor(private http: HttpClient) {

  }

  getRolByName(rname: any | string) {
    return this.http.get(this.config.url + `/api/rol/${rname}`)
  }
}