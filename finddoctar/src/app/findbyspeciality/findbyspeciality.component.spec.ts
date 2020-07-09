import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyspecialityComponent } from './findbyspeciality.component';

describe('FindbyspecialityComponent', () => {
  let component: FindbyspecialityComponent;
  let fixture: ComponentFixture<FindbyspecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyspecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyspecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
