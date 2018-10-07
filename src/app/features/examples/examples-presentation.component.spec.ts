import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesSmartComponent } from './examples-smart.component';

describe('ExamplesSmartComponent', () => {
  let component: ExamplesSmartComponent;
  let fixture: ComponentFixture<ExamplesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
