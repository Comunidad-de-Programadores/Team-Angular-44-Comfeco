import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatCheckboxModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
