import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-credentials',
  templateUrl: './edit-credentials.component.html',
  styleUrls: ['./edit-credentials.component.scss'],
})
export class EditCredentialsComponent implements OnInit {
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  hideOldPassword: boolean;
  formPasswords: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditCredentialsComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; email: string }
  ) {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.hideOldPassword = true;
  }

  ngOnInit(): void {
    this.formPasswords = this.fb.group(
      {
        oldPass: [null, Validators.required],
        email: [
          this.data.email,
          [
            Validators.required,
            Validators.pattern(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ),
          ],
        ],
        pass: [null, Validators.required],
        confirmPass: [null, Validators.required],
      },
      {
        validators: this.validatorEqualPasswords('pass', 'confirmPass'),
      }
    );
  }

  validatorEqualPasswords(pass: string, confirmPass: string) {
    return (control: AbstractControl) => {
      const passControl = control.get(pass);
      const confirmPassControl = control.get(confirmPass);
      if (passControl.value === confirmPassControl.value) {
        if (!confirmPassControl.value) {
          confirmPassControl.setErrors({ required: true });
        } else {
          confirmPassControl.setErrors(null);
        }
      } else {
        confirmPassControl.setErrors({ isNotEqual: true });
        return { isNotEqual: false };
      }

      return null;
    };
  }

  get errorEmailRequired(): boolean {
    return this.formPasswords.get('email').errors?.required && this.formPasswords.get('email').touched;
  }

  get errorEmailFormat(): boolean {
    return this.formPasswords.get('email').errors?.pattern && this.formPasswords.get('email').touched;
  }

  changePasswords() {
    this.authService
      .updatePassword(
        this.data.email,
        this.formPasswords.value.email,
        this.formPasswords.value.oldPass,
        this.formPasswords.value.pass,
        this.data.id
      )
      .then((_) => {
        this.snackbar
          .open('Credenciales actualizadas exitosamente', 'Cerrar', {
            duration: 4000,
          })
          .onAction()
          .subscribe(() => {
            this.onNoClick();
          });
      })
      .catch((error) => this.snackbar.open(error.message, 'Cerrar', { duration: 4000 }));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
