import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector        : 'app-start',
  templateUrl     : './start.component.html',
  styleUrls       : ['./start.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class StartComponent {
  constructor() { }
}
