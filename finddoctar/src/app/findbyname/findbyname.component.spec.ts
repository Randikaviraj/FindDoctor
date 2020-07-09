import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbynameComponent } from './findbyname.component';

describe('FindbynameComponent', () => {
  let component: FindbynameComponent;
  let fixture: ComponentFixture<FindbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
