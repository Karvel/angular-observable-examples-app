import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalValidationComponent } from './conditional-validation.component';

describe('ConditionalValidationComponent', () => {
  let component: ConditionalValidationComponent;
  let fixture: ComponentFixture<ConditionalValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
