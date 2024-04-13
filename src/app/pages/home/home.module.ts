import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';
import { CardAreaComponent } from './card-area/card-area.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './card-area/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardAreaComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
