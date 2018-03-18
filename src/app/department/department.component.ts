import { Component, OnInit } from '@angular/core';
import { DepartmentService} from '../department.service';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departaments = [];
  private errorMsg;
  public selectedId;

  constructor(private _departamentService:DepartmentService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    //  this.employees = this._employeService.getEmployees();
    this._departamentService.getDepartamentsHttp()
        .subscribe(data => this.departaments = data,
                   error => this.errorMsg = error);
    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); 
      this.selectedId = id;
    });
  }
      
  onSelect(departament){
    // this._router.navigate(['/departaments',departament.id]); 
    this._router.navigate([departament.id], {relativeTo: this._route}); 
  }
  
 // isSelected(departament){ 
  isSelected(){
     // return departament.id === this.selectedId;
     return isNaN(this.selectedId) ? 0 : this.selectedId;
  }

  isCurrent(departament){
    return departament.id === this.selectedId;
 }

}
