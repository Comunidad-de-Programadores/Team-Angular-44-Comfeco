import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, CoreModule, SharedModule, ReactiveFormsModule, MaterialModule, QuicklinkModule],
})
export class SignInModule {}
