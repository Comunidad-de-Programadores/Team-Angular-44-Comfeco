import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.emailFormControl.valid) {
      let email = this.emailFormControl.value;
      try {
        await this.authService.recoverPassword(email);
        this.snackbar
          .open('El link de recuperación de contraseña ha sido enviado exitosamente', 'Iniciar Sesión', {
            duration: 6000,
          })
          .onAction()
          .subscribe(() => {
            this.router.navigate(['/auth/sign-in']);
          });
      } catch (err) {
        this.snackbar.open(err.message, 'Cerrar', { duration: 4000 });
      }
    }
  }
}
