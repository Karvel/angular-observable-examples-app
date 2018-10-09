import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
}                          from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
}                          from '@angular/forms';

import { Subscription }    from 'rxjs';

import { EmailValidation } from '../../../core/validation/email-validation';
import { PhoneValidation } from '../../../core/validation/phone-validation';

@Component({
  selector        : 'app-conditional-validation',
  templateUrl     : './conditional-validation.component.html',
  styleUrls       : ['./conditional-validation.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ConditionalValidationComponent implements OnInit, OnDestroy {
  public contactForm: FormGroup;

  private subscriptions: Subscription[] = [];

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

  ngOnInit(): void {
    this.setupConditionalValidators();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public get contactType(): AbstractControl {
    return this.contactForm.get('contactType');
  }

  public checkIfEmail(): boolean {
    return this.contactType.value === 'email';
  }

  public checkIfPhone(): boolean {
    return this.contactType.value === 'phone';
  }

  public get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  public get phone(): AbstractControl {
    return this.contactForm.get('phone');
  }

  private setupConditionalValidators(): void {
    const contactFormSubscription: Subscription = this.contactForm.valueChanges.subscribe(form => {
      if (form.contactType === 'email') {
        this.phone.setValidators([]);
        this.email.setValidators([EmailValidation.validEmail(true)]);
      }
      if (form.contactType === 'phone') {
        this.email.setValidators([]);
        this.phone.setValidators([PhoneValidation.validPhone(true)]);
      }
    });

    this.subscriptions.push(contactFormSubscription);
  }
}
