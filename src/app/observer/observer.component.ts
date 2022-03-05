import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  subject = new Subject<number>()
  numberOne = 0
  numberTwo = 0

  subscriptionOne: any
  subscriptionTwo: any

  totalOne = 0
  totalTwo = 0

  constructor() {
    this.subscriptionFnOne()
    this.subscriptionFnTwo()
   }

  ngOnInit(): void {
  }

  subscriptionFnOne(){
    this.subscriptionOne = this.subject.subscribe(data =>{
      this.totalOne = this.numberOne + this.numberTwo
    })
  }

  subscriptionFnTwo(){
    this.subscriptionTwo = this.subject.subscribe(data =>{
      this.totalTwo = this.numberOne * this.numberTwo
    })
  }

  change(){
    this.subject.next(1)
  }

}