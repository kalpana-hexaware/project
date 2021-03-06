import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployComponent } from './employ.component';

describe('EmployComponent', () => {
  let component: EmployComponent;
  let fixture: ComponentFixture<EmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
