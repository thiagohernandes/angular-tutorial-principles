import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public nome:string = "Chicrute";
  nomes:Array<any> = ["um","dois",'trÊs'];
  public interactProp:string = "Interacting...";
  public interactProp2:string = "Interacting again...";
  public message:string;
}
