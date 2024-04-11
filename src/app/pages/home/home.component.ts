import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostRequestedHotels: any;
  mostRequestedRegions: any;

  constructor() {
    //TODO TESTING DATA
    this.mostRequestedHotels = [
      { id: 1, name: 'Hotel 1', rating: 4.5, location: 'Location 1', price: 70, image: 'https://picsum.photos/300'},
      { id: 2, name: 'Hotel 2', rating: 4.2, location: 'Location 2', price: 80, image: 'https://picsum.photos/100'},
      { id: 3, name: 'Hotel 3', rating: 4.8, location: 'Location 3', price: 90, image: 'https://picsum.photos/500'},
      { id: 4, name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, image: 'https://picsum.photos/600'},
      { id: 5, name: 'Hotel 5', rating: 4.3, location: 'Location 5', price: 100, image: 'https://picsum.photos/700'},
      { id: 6, name: 'Hotel 6', rating: 4.5, location: 'Location 6', price: 70, image: 'https://picsum.photos/210'},
      { id: 7, name: 'Hotel 7', rating: 4.2, location: 'Location 7', price: 80, image: 'https://picsum.photos/520'},
    ];

    this.mostRequestedRegions = [
      { id: 6, name: 'Hotel 6', rating: 4.5, location: 'Location 6', price: 70, image: 'https://picsum.photos/210'},
      { id: 7, name: 'Hotel 7', rating: 4.2, location: 'Location 7', price: 80, image: 'https://picsum.photos/520'},
      { id: 8, name: 'Hotel 8', rating: 4.8, location: 'Location 8', price: 90, image: 'https://picsum.photos/230'},
      { id: 9, name: 'Hotel 9', rating: 4.3, location: 'Location 9', price: 100, image: 'https://picsum.photos/140'},
      { id: 10, name: 'Hotel 10', rating: 4.3, location: 'Location 10', price: 100, image: 'https://picsum.photos/260'},
      { id: 11, name: 'Hotel 11', rating: 4.5, location: 'Location 11', price: 70, image: 'https://picsum.photos/310'},
      { id: 12, name: 'Hotel 12', rating: 4.2, location: 'Location 12', price: 80, image: 'https://picsum.photos/420'},
      { id: 13, name: 'Hotel 13', rating: 4.8, location: 'Location 13', price: 90, image: 'https://picsum.photos/530'}
    ];
  }
}
