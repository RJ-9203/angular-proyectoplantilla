import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  config = config 

  constructor() { 
    //console.log(this.config.menuComponent.home)
  }

  ngOnInit(): void {
  }

}
