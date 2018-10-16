import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderObservablesSmartComponent } from './higher-order-observables-smart.component';

describe('HigherOrderObservablesSmartComponent', () => {
  let component: HigherOrderObservablesSmartComponent;
  let fixture: ComponentFixture<HigherOrderObservablesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderObservablesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderObservablesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
