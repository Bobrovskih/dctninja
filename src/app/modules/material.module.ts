import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatTooltipModule,
} from '@angular/material';

const materials = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatTooltipModule,
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