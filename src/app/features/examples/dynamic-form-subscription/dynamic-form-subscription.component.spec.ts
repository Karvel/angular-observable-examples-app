import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormSubscriptionComponent } from './dynamic-form-subscription.component';

describe('DynamicFormSubscriptionComponent', () => {
  let component: DynamicFormSubscriptionComponent;
  let fixture: ComponentFixture<DynamicFormSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
