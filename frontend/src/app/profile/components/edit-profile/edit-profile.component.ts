import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @Output() hideEditProfile = new EventEmitter<boolean>();
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  generos: { id: number; text: string }[];
  formPerfil: FormGroup;
  imgUrl: string | ArrayBuffer;
  constructor(private fb: FormBuilder) {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.generos = [
      { id: 1, text: 'Masculino' },
      { id: 2, text: 'Femenino' },
    ];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formPerfil = this.fb.group(
      {
        nick: [null, Validators.required],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ),
          ],
        ],
        genero: [null, Validators.required],
        fechaNacimiento: [null, Validators.required],
        pais: [null, Validators.required],
        contra: [null, Validators.required],
        confirmarContra: [null, Validators.required],
        github: [null],
        linkedin: [null],
        facebook: [null],
        twitter: [null],
        biografia: [null],
      },
      {
        validators: this.validatorEqualPasswords('contra', 'confirmarContra'),
      }
    );
  }

  get errorEmailRequired(): boolean {
    return this.formPerfil.get('email').errors?.required && this.formPerfil.get('email').touched;
  }

  get errorEmailFormat(): boolean {
    return this.formPerfil.get('email').errors?.pattern && this.formPerfil.get('email').touched;
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
      }

      return null;
    };
  }

  fileChangeEvent(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
    console.log(file);
  }

  backDetails(): void {
    this.hideEditProfile.emit(false);
  }
}
