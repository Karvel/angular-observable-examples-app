import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderObservablesComponent } from './higher-order-observables.component';

describe('HigherOrderObservablesSmartComponent', () => {
  let component: HigherOrderObservablesComponent;
  let fixture: ComponentFixture<HigherOrderObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
