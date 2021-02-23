import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent, FooterComponent],
  imports: [RouterModule, CommonModule, MaterialModule, QuicklinkModule],
})
export class SharedModule {}
