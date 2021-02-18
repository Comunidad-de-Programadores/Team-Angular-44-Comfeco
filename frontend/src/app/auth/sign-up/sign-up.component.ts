import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean;
  hideConfirmPassword: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = this.fb.group(
      {
        nick: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        pass: [null, Validators.required],
        confirmPass: [null, Validators.required],
        agreeTerms: [false, Validators.requiredTrue],
      },
      {
        validators: this.validatorEqualPasswords('pass', 'confirmPass'),
      }
    );
  }

  async singUp(): Promise<void> {
    if (this.form.valid) {
      let { confirmPass, pass, agreeTerms, ...userData } = this.form.value;
      try {
        await this.authService.signUp(userData, pass);
        this.router.navigate(['/']);
      } catch (err) {
        if (err.code == 'auth/email-already-in-use') {
          this.snackbar
            .open(err.message, 'Olvidé mi contraseña', { duration: 4000 })
            .onAction()
            .subscribe(() => {
              this.router.navigate(['/auth/recover-password']);
            });
        } else {
          this.snackbar.open(err.message, 'Cerrar', { duration: 4000 });
        }
      }
    }
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
