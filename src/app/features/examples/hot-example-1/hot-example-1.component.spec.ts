import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotExample1Component } from './hot-example-1.component';

describe('HotExample1Component', () => {
  let component: HotExample1Component;
  let fixture: ComponentFixture<HotExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
