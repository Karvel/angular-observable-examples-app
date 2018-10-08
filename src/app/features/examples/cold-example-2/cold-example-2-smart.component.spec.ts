import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdExample2SmartComponent } from './cold-example-2-smart.component';

describe('ColdExample2SmartComponent', () => {
  let component: ColdExample2SmartComponent;
  let fixture: ComponentFixture<ColdExample2SmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdExample2SmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdExample2SmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
