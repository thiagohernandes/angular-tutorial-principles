import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentDetailComponent } from './departament-detail.component';

describe('DepartamentDetailComponent', () => {
  let component: DepartamentDetailComponent;
  let fixture: ComponentFixture<DepartamentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
