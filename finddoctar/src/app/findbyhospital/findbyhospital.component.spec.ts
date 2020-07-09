import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyhospitalComponent } from './findbyhospital.component';

describe('FindbyhospitalComponent', () => {
  let component: FindbyhospitalComponent;
  let fixture: ComponentFixture<FindbyhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
