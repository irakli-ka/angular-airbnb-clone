import { Component, Input } from '@angular/core';
import { Hotel } from '../../../shared/models/Hotel.model';
import { Image } from '../../../shared/models/Image.model';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css',
})
export class CardAreaComponent {
  limit: any = 10;

  @Input() allHotels: Hotel[] = [];


  constructor () {}


  onSeeMore() {
    this.limit += 5;
  }


}
