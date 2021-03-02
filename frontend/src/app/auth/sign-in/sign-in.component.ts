import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.hidePassword = true;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }
  get errorEmailRequired(): boolean {
    return this.form.get('email').errors?.required && this.form.get('email').touched;
  }
  get errorEmailFormat(): boolean {
    return this.form.get('email').errors?.pattern && this.form.get('email').touched;
  }
  get errorPasswordRequired(): boolean {
    return this.form.get('password').errors?.required && this.form.get('password').touched;
  }
  get errorPasswordLength(): boolean {
    return this.form.get('password').errors?.minlength && this.form.get('password').touched;
  }

  async singIn(): Promise<void> {
    if (this.form.valid) {
      let { email, password } = this.form.value;
      try {
        await this.authService.signIn(email, password);
        this.router.navigate(['/']);
      } catch (err) {
        if (err.code == 'auth/user-not-found') {
          this.snackbar
            .open(err.message, 'Iniciar Sesión', { duration: 4000 })
            .onAction()
            .subscribe(() => {
              this.router.navigate(['/auth/sign-up']);
            });
        } else {
          this.snackbar.open(err.message, 'Cerrar', { duration: 4000 });
        }
      }
    }
  }
}
