import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CountDownComponent } from './count-down/count-down.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CountDownComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule, CoreModule],
})
export class HomeModule {}
