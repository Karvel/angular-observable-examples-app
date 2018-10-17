import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitfallGridControlComponent } from './pitfall-grid-control.component';

describe('PitfallGridControlComponent', () => {
  let component: PitfallGridControlComponent;
  let fixture: ComponentFixture<PitfallGridControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PitfallGridControlComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitfallGridControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
