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
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  constructor(private fb: FormBuilder) {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = this.fb.group(
      {
        nick: [null, Validators.required],
        email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
        pass: [null, Validators.required],
        confirmPass: [null, Validators.required],
        agreeTerms: [false, Validators.requiredTrue],
      },
      {
        validators: this.validatorEqualPasswords('pass', 'confirmPass'),
      }
    );
  }

  singUp(): void {
    // if (this.form.invalid) return;
    console.log(this.form.value);
  }

  get errorEmailRequired(): boolean {
    return this.form.get('email').errors?.required && this.form.get('email').touched;
  }

  get errorEmailFormat(): boolean {
    return this.form.get('email').errors?.pattern && this.form.get('email').touched;
  }

  validatorEqualPasswords(pass: string, confirmPass: string) {
    return (control: AbstractControl) => {
      const passControl = control.get(pass);
      const confirmPassControl = control.get(confirmPass);
      if (passControl.value === confirmPassControl.value) {
        confirmPassControl.setErrors(null);
      } else {
        confirmPassControl.setErrors({ isNotEqual: false });
        return { isNotEqual: false };
      }

      return null;
    };
  }
}
