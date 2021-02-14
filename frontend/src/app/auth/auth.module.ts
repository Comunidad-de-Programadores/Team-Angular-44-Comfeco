import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
