import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderOperatorsPresentationComponent } from './higher-order-presentation.component';

describe('HigherOrderObservablesPresentationComponent', () => {
  let component: HigherOrderOperatorsPresentationComponent;
  let fixture: ComponentFixture<HigherOrderOperatorsPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderOperatorsPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderOperatorsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
