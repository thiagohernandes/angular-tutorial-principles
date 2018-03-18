import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentService} from '../department.service';

@Component({
  selector: 'app-departament-detail',
  templateUrl: './departament-detail.component.html',
  styleUrls: ['./departament-detail.component.css']
})
export class DepartamentDetailComponent implements OnInit {

  public departamentId;
  public sizeDepartamentArray:number;
  private departamentsSize;
  private errorMsg;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _departamentService:DepartmentService) { }

  ngOnInit() {
   // let id = parseInt(this._route.snapshot.paramMap.get('id'));
   // this.departamentId = id;
   this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departamentId = id;
   });
   this._departamentService.getDepartamentsHttp()
   .subscribe(data => this.departamentsSize = data,
              error => this.errorMsg = error);

  }

  goPrevious(){
      if(this.departamentId > 1){
      let previousId = this.departamentId - 1;
      this._router.navigate(['/departaments',previousId]);
    
      }
  }

  goNext(){
      if(this.departamentId < this.departamentsSize.length) {
        let nextId = this.departamentId + 1;
        this._router.navigate(['/departaments',nextId]);     
      }      
  }

  goDepartaments(){
    let selectedId = this.departamentId ? this.departamentId : null;
   // this._router.navigate(['departaments',{id:selectedId}]);
   // this._router.navigate(['departaments',{id:selectedId, test: 'fff'}]);
    this._router.navigate(['../',{id:selectedId}], {relativeTo: this._route});
  }

  showOverview(){
    this._router.navigate(['overview'], {relativeTo:this._route});
  }

  showContact(){
    this._router.navigate(['contact'], {relativeTo:this._route});
  }
}
