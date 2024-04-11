import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-area',
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css',
})
export class CardAreaComponent {
  limit: any = 5;

  @Input() Hotels: any[] = [];

  onSeeMore() {
    this.limit += 5;
  }
}
