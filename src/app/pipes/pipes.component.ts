import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "filisbino ferradura";
  public message = "Welcome";
  public person = {
    "firstName" : "Tarraso",
    "lastName" : "Tafundo"
  }
  public data = new Date();

  constructor() { }

  ngOnInit() {
  }

}
