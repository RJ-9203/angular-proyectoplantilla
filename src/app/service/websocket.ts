import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { config } from '../config/config';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class    WebSocketsService {

    private socket: Socket
    config = config
  
  
  constructor() {
      this.socket = io(this.config.url)
   }

  enviarM(data:any | String){
      this.socket.emit('send message', {messages:data})

  }
  enviarJ(data:any | String){
    this.socket.emit('send message', {messages:data})

  }
  equipo1(data:any | String){
    this.socket.emit('send message', {messages:data})

  }
  equipo2(data:any | String){
    this.socket.emit('send message', {messages:data})

  }


  listenNewMessages(){
      return new Observable(observer =>{
          this.socket.on('getNewMessage', message => {
              observer.next(message)
          })
      })
  }
}