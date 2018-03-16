import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public _msg = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    alert('Hi');
    this._msg = "Hi msg --> "+event.type;
    console.log(event);
  }

}
