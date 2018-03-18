import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentOverviewComponent } from './departament-overview.component';

describe('DepartamentOverviewComponent', () => {
  let component: DepartamentOverviewComponent;
  let fixture: ComponentFixture<DepartamentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
