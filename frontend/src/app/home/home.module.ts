import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { AutomaticCarouselComponent } from './components/automatic-carousel/automatic-carousel.component';

@NgModule({
  declarations: [CountDownComponent, HomeComponent, AutomaticCarouselComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule, CoreModule, SlickCarouselModule],
})
export class HomeModule {}
