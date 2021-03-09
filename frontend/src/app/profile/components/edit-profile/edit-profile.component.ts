import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { EditProfileService } from '../../../core/services/edit-profile.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnChanges {
  @Output() hideEditProfile = new EventEmitter<boolean>();
  @Input() profile: User;
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  genders: { id: number; text: string }[];
  countries: { id: number; text: string }[];
  formPerfil: FormGroup;
  imgUrl: string | ArrayBuffer;
  date = new Date();
  constructor(
    private fb: FormBuilder,
    private editProfileService: EditProfileService,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {
    this.profile = {} as any;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.genders = [
      { id: 1, text: 'Masculino' },
      { id: 2, text: 'Femenino' },
    ];
    this.countries = [];
  }

  ngOnInit(): void {
    this.initForm();
    this.editProfileService.getCountries().subscribe((response: any) => (this.countries = response));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.profile && !changes.profile.isFirstChange()) {
      this.formPerfil.patchValue({
        email: this.profile.email || null,
        nickname: this.profile.nickname || null,
        birthday: new Date(this.profile.birthday || this.date),
        gender: this.profile.gender || null,
        country: this.profile.country || null,
        github: this.profile.github || null,
        linkedin: this.profile.linkedin || null,
        facebook: this.profile.facebook || null,
        twitter: this.profile.twitter || null,
        bio: this.profile.bio || null,
      });
    }
  }

  initForm(): void {
    this.formPerfil = this.fb.group({
      nickname: [null, Validators.required],
      gender: [null, Validators.required],
      birthday: [null, Validators.required],
      country: [null, Validators.required],
      github: [null],
      linkedin: [null],
      facebook: [null],
      twitter: [null],
      bio: [null],
    });
  }

  fileChangeEvent(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    };
    console.log(file);
  }

  sendForm() {
    this.authService
      .updateUser(this.formPerfil.value, this.profile.id)
      .then((result) => {
        this.snackbar
          .open('Perfil actualizado exitosamente', 'Cerrar', {
            duration: 4000,
          })
          .onAction()
          .subscribe(() => {
            this.hideEditProfile.emit(false);
          });
      })
      .catch((error) => {
        this.snackbar.open(error.message, 'Cerrar', { duration: 4000 });
      });
  }

  backDetails(): void {
    this.hideEditProfile.emit(false);
  }
}
