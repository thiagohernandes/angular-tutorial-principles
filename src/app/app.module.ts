import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModule


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DependencyInjectDetailComponent } from './dependency-inject-detail/dependency-inject-detail.component';

import { EmployeesServiceService } from './employees-service.service';
import { DepartmentService } from './department.service';

import { HttpClientModule} from '@angular/common/http';
import { NavigationRoutingComponent } from './navigation-routing/navigation-routing.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ComponentInteractionComponent,
    PipesComponent,
    DependencyInjectionComponent,
    DependencyInjectDetailComponent,
    NavigationRoutingComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeesServiceService,
    DepartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
