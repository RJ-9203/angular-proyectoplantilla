import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/config/config';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})
export class CraftComponent implements OnInit {

  config = config

  constructor() { }

  ngOnInit(): void {
  }

}
