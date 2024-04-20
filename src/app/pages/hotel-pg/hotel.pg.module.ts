import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { HotelPgComponent } from './hotel-pg.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
    declarations: [
      HotelPgComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
      HotelPgComponent
    ]
  })
export class HotelPgModule{ }