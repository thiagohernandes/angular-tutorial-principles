import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentContactComponent } from './departament-contact.component';

describe('DepartamentContactComponent', () => {
  let component: DepartamentContactComponent;
  let fixture: ComponentFixture<DepartamentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
