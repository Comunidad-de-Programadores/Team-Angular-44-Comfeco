import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { RecoverPasswordComponent } from './recover-password.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [CommonModule, RecoverPasswordRoutingModule, CoreModule, SharedModule, ReactiveFormsModule, MaterialModule, QuicklinkModule],
})
export class RecoverPasswordModule {}
