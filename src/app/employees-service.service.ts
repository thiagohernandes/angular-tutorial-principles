import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeesServiceService {

  constructor(private http:HttpClient) { 

    this._employees = [
      {"id" : 1, "name": "Andrew", "age": 30},
      {"id" : 2, "name": "Brandon", "age": 25},
      {"id" : 3, "name": "Christina", "age": 37},
      {"id" : 4, "name": "Elena", "age": 40},
      ];

  }

  private _employees:Array<Object>;
  private _url:string="/assets/data/employees.json";

  getEmployees(){
    return this._employees;
  }

  addEmployee(){
    this._employees.push({"id" : 5, "name": "Teste", "age": 99});
  }

  getEmployeesHttp():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
              .catch(this._errorHandler);
  }

  _errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
  }

}
