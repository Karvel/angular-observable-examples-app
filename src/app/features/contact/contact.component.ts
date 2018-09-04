import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector        : 'app-contact',
  templateUrl     : './contact.component.html',
  styleUrls       : ['./contact.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  constructor() { }
}
