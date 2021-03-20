import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule, CoreModule, SharedModule, ReactiveFormsModule, MaterialModule, QuicklinkModule],
})
export class AuthModule {}
