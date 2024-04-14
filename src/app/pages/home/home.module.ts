import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';
import { CardAreaComponent } from './card-area/card-area.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardAreaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
