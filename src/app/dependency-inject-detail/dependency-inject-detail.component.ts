import { Component, OnInit } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-dependency-inject-detail',
  templateUrl: './dependency-inject-detail.component.html',
  styleUrls: ['./dependency-inject-detail.component.css']
})
export class DependencyInjectDetailComponent implements OnInit {
  
  private employees = [];
  private errorMsg;

  constructor(private _employeService:EmployeesServiceService) { }

  ngOnInit() {
   // this.employees = this._employeService.getEmployees();
   this._employeService.getEmployeesHttp()
       .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }
  
  addEmployee(){
    this._employeService.addEmployee();
  }


}
