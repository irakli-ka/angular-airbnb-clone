import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css',
})
export class CardAreaComponent {
  limit: any = 5;


  @Input() Hotels: any[] = [];

  images = ['https://picsum.photos/300', 'https://picsum.photos/301', 'https://picsum.photos/302']

  constructor () {}

  onSeeMore() {
    this.limit += 5;
  }
}
