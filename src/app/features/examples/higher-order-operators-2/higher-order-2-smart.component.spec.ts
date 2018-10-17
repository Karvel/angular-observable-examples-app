import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderOperators2SmartComponent } from './higher-order-2-smart.component';

describe('HigherOrderOperators2SmartComponent', () => {
  let component: HigherOrderOperators2SmartComponent;
  let fixture: ComponentFixture<HigherOrderOperators2SmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderOperators2SmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderOperators2SmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
