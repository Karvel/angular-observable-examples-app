import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderObservablesPresentationComponent } from './higher-order-observables-presentation.component';

describe('HigherOrderObservablesPresentationComponent', () => {
  let component: HigherOrderObservablesPresentationComponent;
  let fixture: ComponentFixture<HigherOrderObservablesPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderObservablesPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderObservablesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
