import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentComponent } from '../department/department.component';
import { DependencyInjectDetailComponent } from '../dependency-inject-detail/dependency-inject-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DepartamentDetailComponent } from '../departament-detail/departament-detail.component';
import { DepartamentOverviewComponent } from '../departament-overview/departament-overview.component';
import { DepartamentContactComponent } from '../departament-contact/departament-contact.component';

const routes: Routes = [
 // {path: '', component:DepartmentComponent},
 // {path: '', redirectTo: '/departaments', pathMatch: 'prefix'},

  {path: '', redirectTo: '/departaments', pathMatch: 'full'},
  {path: 'employees', component: DependencyInjectDetailComponent},
  {
    path: 'departaments', component: DepartmentComponent,
    children: [
      {path: 'overview', component: DepartamentOverviewComponent },
      {path: 'contact', component: DepartamentContactComponent }
    ]
  },
  {path: 'departaments/:id', component: DepartamentDetailComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Be atention!!!!! forChild --> forRoot
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
// ********** Routes CONST **********
export const routingComponents = [
                                  DepartmentComponent,
                                  DependencyInjectDetailComponent,
                                  NotFoundComponent,
                                  DepartamentDetailComponent,
                                  DepartamentOverviewComponent,
                                  DepartamentContactComponent
                                  ];
