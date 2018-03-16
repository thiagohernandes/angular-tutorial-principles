import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test', 
  // selector: '.app-test', CASO 2
 // selector: '[app-test]', // CASO 3
  templateUrl: './test.component.html',
 // template:`<div>Inline template</div>`,
  styleUrls: ['./test.component.css']
 /* styles:[
    `div {
      color : blue
    }`
  ]*/
})
export class TestComponent implements OnInit {

  @Input()
  entrada;

  constructor() {
   
   }

  ngOnInit() {
  }

}
