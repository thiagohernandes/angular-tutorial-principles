import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRoutingComponent } from './navigation-routing.component';

describe('NavigationRoutingComponent', () => {
  let component: NavigationRoutingComponent;
  let fixture: ComponentFixture<NavigationRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
