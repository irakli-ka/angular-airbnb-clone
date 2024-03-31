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
      { name: 'Hotel 1', rating: 4.5, location: 'Location 1', price: 70, image: 'https://picsum.photos/200'},
      { name: 'Hotel 2', rating: 4.2, location: 'Location 2', price: 80, image: 'https://picsum.photos/200'},
      { name: 'Hotel 3', rating: 4.8, location: 'Location 3', price: 90, image: 'https://picsum.photos/200'},
      { name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, image: 'https://picsum.photos/200'},
      { name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, image: 'https://picsum.photos/200'}
      
    ];
    this.mostRequestedRegions = [
      { name: 'Hotel 1', rating: 4.5, location: 'Location 1', price: 70, image: 'https://picsum.photos/200'},
      { name: 'Hotel 2', rating: 4.2, location: 'Location 2', price: 80, image: 'https://picsum.photos/200'},
      { name: 'Hotel 3', rating: 4.8, location: 'Location 3', price: 90, image: 'https://picsum.photos/200'},
      { name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, image: 'https://picsum.photos/200'},
      { name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, image: 'https://picsum.photos/200'}
    ];
  }
}
