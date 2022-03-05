import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    modules: any
    user: string | any
    rol: string | any
    _id : string | any
    statusModules = false
}