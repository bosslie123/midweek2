import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css']
})
export class ToogleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  defaultNumber = 0;
  rndNumber = (Math.random() * 10).toFixed(0);


  increment(){
    this.defaultNumber =  this.defaultNumber += Math.floor(Math.random( ) * 10);

  }
  decrement(){
    this.defaultNumber =  this.defaultNumber -= Math.floor(Math.random( ) * 10);
  }
}
