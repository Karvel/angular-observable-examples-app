import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector        : 'app-contact',
  templateUrl     : './contact.component.html',
  styleUrls       : ['./contact.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.contactForm = this.formBuilder.group({
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      message: '',
      subject: '',
      contactType: '',
    });
  }

  public get contactType(): AbstractControl {
    return this.contactForm.get('contactType');
  }
}
