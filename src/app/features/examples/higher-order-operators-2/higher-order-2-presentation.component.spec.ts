import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderOperators2PresentationComponent } from './higher-order-2-presentation.component';

describe('HigherOrderOperators2PresentationComponent', () => {
  let component: HigherOrderOperators2PresentationComponent;
  let fixture: ComponentFixture<HigherOrderOperators2PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderOperators2PresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderOperators2PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
