import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCorrectComponent } from './password-correct.component';

describe('PasswordCorrectComponent', () => {
  let component: PasswordCorrectComponent;
  let fixture: ComponentFixture<PasswordCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
