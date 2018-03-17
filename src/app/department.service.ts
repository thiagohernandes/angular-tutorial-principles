import { Injectable } from '@angular/core';
import { IDepartament } from './departament';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DepartmentService {

  constructor(private http:HttpClient) { }

  private _employees:Array<Object>;
  private _url:string="/assets/data/departaments.json";

  getDepartamentsHttp():Observable<IDepartament[]>{
    return this.http.get<IDepartament[]>(this._url)
              .catch(this._errorHandler);
  }

  _errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
  }


}
