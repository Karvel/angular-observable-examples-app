import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredInputComponent } from './required-input.component';

describe('RequiredInputComponent', () => {
  let component: RequiredInputComponent;
  let fixture: ComponentFixture<RequiredInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequiredInputComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
