import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunitiesRoutingModule } from './comunities-routing.module';
import { ComunitiesComponent } from './comunities.component';


@NgModule({
  declarations: [ComunitiesComponent],
  imports: [
    CommonModule,
    ComunitiesRoutingModule
  ]
})
export class ComunitiesModule { }
