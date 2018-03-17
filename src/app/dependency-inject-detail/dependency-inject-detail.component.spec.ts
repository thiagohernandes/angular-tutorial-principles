import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectDetailComponent } from './dependency-inject-detail.component';

describe('DependencyInjectDetailComponent', () => {
  let component: DependencyInjectDetailComponent;
  let fixture: ComponentFixture<DependencyInjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
