import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderOperatorsSmartComponent } from './higher-order-smart.component';

describe('HigherOrderOperatorsSmartComponent', () => {
  let component: HigherOrderOperatorsSmartComponent;
  let fixture: ComponentFixture<HigherOrderOperatorsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderOperatorsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderOperatorsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
