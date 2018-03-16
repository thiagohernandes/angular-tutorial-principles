import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public nome:string = "Chicrute";
  nomes:Array<any> = ["um","dois",'trÊs']

}
