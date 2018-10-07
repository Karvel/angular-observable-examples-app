import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdExamplePresentationComponent } from './cold-example-presentation.component';

describe('ColdExamplePresentationComponent', () => {
  let component: ColdExamplePresentationComponent;
  let fixture: ComponentFixture<ColdExamplePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdExamplePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdExamplePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
