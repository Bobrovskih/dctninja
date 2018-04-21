import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatProgressBarModule,
  MatSnackBarModule,
} from '@angular/material';

const materials = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatProgressBarModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...materials,
  ],
  exports: [
    ...materials,
  ],
  declarations: []
})
export class MaterialModule { }