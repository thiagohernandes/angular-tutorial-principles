import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
 // styleUrls: ['./class-binding.component.css']
 styles:[]
})
export class ClassBindingComponent implements OnInit {

  public _name:string = "Filisbino";
  public _classSuccess = "text-success";
  public _hasError = false;
  public isEspecial = true;
  public messageClasses = {
    "text-success" : !this._hasError,
    "text-danger" : this._hasError,
    "text-special" : this.isEspecial
  }
  public _highlightColor = "brown";
  public titleStyles = {
      color: "blue",
      fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
