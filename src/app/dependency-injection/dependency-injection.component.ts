import { Component, OnInit } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  private employees = [];
  private errorMsg;

  constructor(private _employeService:EmployeesServiceService) { }

  ngOnInit() {
  //  this.employees = this._employeService.getEmployees();
  this._employeService.getEmployeesHttp()
  .subscribe(data => this.employees = data,
             error => this.errorMsg = error);
  }

  addEmployee(){
    this._employeService.addEmployee();
  }

}
