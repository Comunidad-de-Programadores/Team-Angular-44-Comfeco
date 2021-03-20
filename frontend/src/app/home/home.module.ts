import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { AutomaticCarouselComponent } from './components/automatic-carousel/automatic-carousel.component';
import { StaticCarouselComponent } from './components/static-carousel/static-carousel.component';
import { ComunitiesComponent } from './containers/comunities/comunities.component';
import { ItemCommunitiesComponent } from './components/item-communities/item-communities.component';

@NgModule({
  declarations: [
    CountDownComponent,
    HomeComponent,
    AutomaticCarouselComponent,
    StaticCarouselComponent,
    ComunitiesComponent,
    ItemCommunitiesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule, CoreModule, SlickCarouselModule],
})
export class HomeModule {}
