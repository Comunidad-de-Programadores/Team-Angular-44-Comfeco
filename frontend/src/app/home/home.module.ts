import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CountDownComponent } from './count-down/count-down.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { AutomaticCarouselComponent } from './components/automatic-carousel/automatic-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [CountDownComponent, HomeComponent, AutomaticCarouselComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule, CoreModule, SlickCarouselModule],
})
export class HomeModule {}
