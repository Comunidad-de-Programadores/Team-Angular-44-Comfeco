import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { EditProfileService } from '../../../core/services/edit-profile.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Badge } from 'src/app/core/models/badge.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnChanges {
  @Output() hideEditProfile = new EventEmitter<boolean>();
  @Input() profile: User;
  @Input() badges: Badge[];
  @Input() professions: { id: number; text: string }[];
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  genders: { id: number; text: string }[];
  countries: { id: number; text: string }[];
  formPerfil: FormGroup;
  imgUrl: string | ArrayBuffer;
  date = new Date();
  isFormSend: boolean;
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
    this.isFormSend = false;
  }

  ngOnInit(): void {
    this.initForm();
    this.editProfileService.getCountries().subscribe((response: any) => (this.countries = response));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.formPerfil && this.profile) {
      this.imgUrl = this.profile?.image;
      this.formPerfil.patchValue({
        email: this.profile.email || null,
        profession: this.profile.profession,
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

      this.validateSocialBadge();
    }
  }

  validateSocialBadge() {
    if (this.isFormSend) {
      let isDataUsercomplete: boolean = true;
      const {
        id,
        profession,
        bio,
        birthday,
        country,
        email,
        gender,
        image,
        nickname,
        badges,
        github,
        linkedin,
        twitter,
        facebook,
      } = this.profile;

      const user = new User(
        id,
        image,
        nickname,
        email,
        profession,
        bio,
        gender,
        birthday,
        country,
        badges,
        github,
        linkedin,
        twitter,
        facebook
      );
      for (const key in user) {
        const element = user[key];
        if (!element) {
          isDataUsercomplete = false;
          break;
        }
      }
      const social = this.badges && this.badges.find((badge) => badge.name.toLowerCase() === 'social');
      const userHasSocialBadge = user.badges.find((badge) => badge.name.toLowerCase() === 'social');

      if (!userHasSocialBadge && isDataUsercomplete) {
        this.authService.updateSocialBadge(user.badges, social, this.profile.id).then(console.log).catch(console.log);
      }
    }
  }

  initForm(): void {
    this.formPerfil = this.fb.group({
      nickname: [null, Validators.required],
      profession: [null, Validators.required],
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

  async fileChangeEvent(event: Event) {
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

    const task = this.authService.uploadProfileImage(file.name, file);
    const obs = await task.snapshotChanges().toPromise();
    const pathUrl = await obs.ref.getDownloadURL();
    await this.authService.updateProfileImage(this.profile.id, pathUrl);
  }

  sendForm() {
    this.isFormSend = true;
    this.authService
      .updateUser(this.formPerfil.value, this.profile.id)
      .then((_) => {
        this.snackbar
          .open('Perfil actualizado exitosamente', 'Cerrar', {
            duration: 4000,
          })
          .onAction()
          .subscribe((res) => {
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
