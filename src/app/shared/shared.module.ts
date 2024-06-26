import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarouselComponent]
})
export class SharedModule { }
