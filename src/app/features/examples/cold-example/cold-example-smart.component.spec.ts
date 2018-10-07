import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdExampleSmartComponent } from './cold-example-smart.component';

describe('ColdExampleSmartComponent', () => {
  let component: ColdExampleSmartComponent;
  let fixture: ComponentFixture<ColdExampleSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdExampleSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdExampleSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
