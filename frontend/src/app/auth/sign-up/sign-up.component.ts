import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  hide1: boolean;
  hide2: boolean;
  constructor(private fb: FormBuilder) {
    this.hide1 = true;
    this.hide2 = true;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = this.fb.group(
      {
        nick: [null, Validators.required],
        email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
        pass1: [null, Validators.required],
        confirmPass: [null, Validators.required],
        agreeTerms: [false, Validators.requiredTrue],
      },
      {
        validators: this.validatorEqualPasswords('pass1', 'confirmPass'),
      }
    );
  }

  singUp(): void {
    // if (this.form.invalid) return;
    console.log(this.form.value);
  }

  get errorEmailRequired(): boolean {
    return this.form.get('email').errors && this.form.get('email').errors.required && this.form.get('email').touched;
  }

  get errorEmailFormat(): boolean {
    return this.form.get('email').errors && this.form.get('email').errors.pattern && this.form.get('email').touched;
  }

  validatorEqualPasswords(pass1: string, confirmPass: string) {
    return (control: AbstractControl) => {
      const pass1Control = control.get(pass1);
      const confirmPassControl = control.get(confirmPass);
      if (pass1Control.value === confirmPassControl.value) {
        confirmPassControl.setErrors(null);
      } else {
        confirmPassControl.setErrors({ isNotEqual: false });
        return { isNotEqual: false };
      }

      return null;
    };
  }
}
