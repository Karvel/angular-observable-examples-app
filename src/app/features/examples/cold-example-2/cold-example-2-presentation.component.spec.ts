import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdExample2PresentationComponent } from './cold-example-2-presentation.component';

describe('ColdExample2PresentationComponent', () => {
  let component: ColdExample2PresentationComponent;
  let fixture: ComponentFixture<ColdExample2PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdExample2PresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdExample2PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
