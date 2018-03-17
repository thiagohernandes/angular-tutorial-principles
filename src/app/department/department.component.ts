import { Component, OnInit } from '@angular/core';
import { DepartmentService} from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departaments = [];
  private errorMsg;

  constructor(private _departamentService:DepartmentService) { }

  ngOnInit() {
    //  this.employees = this._employeService.getEmployees();
    this._departamentService.getDepartamentsHttp()
        .subscribe(data => this.departaments = data,
                   error => this.errorMsg = error);
    }
  

}
