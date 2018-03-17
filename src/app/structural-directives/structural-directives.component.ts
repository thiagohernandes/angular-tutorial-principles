import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  displayName = true;
  public color = "red";

  public numeros:Array<string> = ['um','dois','três','quatro'];

  constructor() { }

  ngOnInit() {
  }

}
