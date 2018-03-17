import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
/* template: `
      <div>{{name}}</div>
      <div>{{4+4}}</div>
      <div>{{"Welcome " + name}}</div>
      <div>{{name.length}}</div>
      <div>{{name.toUpperCase()}}</div>
      <div>{{olaSr()}}</div>
      <div>{{_name}}</div>
  `,*/
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  @Input()
  _name:string;

  @Input()
  _nameArray:Array<string>

  public name:String = "Beltrano da Silva";
  siteUrl = window.location.href;
 
  constructor() { }

  ngOnInit() {
  }

  olaSr(){
    return "yes sr. "+this.name;
  }

}
