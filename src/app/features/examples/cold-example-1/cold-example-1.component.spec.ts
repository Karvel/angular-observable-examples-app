import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdExample1Component } from './cold-example-1.component';

describe('ColdExample1Component', () => {
  let component: ColdExample1Component;
  let fixture: ComponentFixture<ColdExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
