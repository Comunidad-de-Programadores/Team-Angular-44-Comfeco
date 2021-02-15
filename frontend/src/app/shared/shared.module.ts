import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [HeaderComponent, MainLayoutComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
