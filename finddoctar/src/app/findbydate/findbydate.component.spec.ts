import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbydateComponent } from './findbydate.component';

describe('FindbydateComponent', () => {
  let component: FindbydateComponent;
  let fixture: ComponentFixture<FindbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
