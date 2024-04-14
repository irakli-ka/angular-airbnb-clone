import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { HotelPgComponent } from './hotel-pg.component';

@NgModule({
    declarations: [
      HotelPgComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
      HotelPgComponent
    ]
  })
export class HotelPgModule{ }