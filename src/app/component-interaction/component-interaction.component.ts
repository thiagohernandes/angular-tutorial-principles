import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input()
  public parentData:string;
  @Input()
  public anotherData:string;
  @Input('nomesData')
  public arrayDeNomes:Array<string>;
  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Guy!!');
  }

}
