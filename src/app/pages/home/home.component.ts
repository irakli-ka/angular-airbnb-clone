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
      { id: 1, name: 'Hotel 1', rating: 4.5, location: 'Location 1', price: 70, images: ['https://picsum.photos/300/1', 'https://picsum.photos/300/2', 'https://picsum.photos/300/3']},
      { id: 2, name: 'Hotel 2', rating: 4.2, location: 'Location 2', price: 80, images: ['https://picsum.photos/100/1', 'https://picsum.photos/100/2', 'https://picsum.photos/100/3']},
      { id: 3, name: 'Hotel 3', rating: 4.8, location: 'Location 3', price: 90, images: ['https://picsum.photos/500/1', 'https://picsum.photos/500/2', 'https://picsum.photos/500/3']},
      { id: 4, name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, images: ['https://picsum.photos/600/1', 'https://picsum.photos/600/2', 'https://picsum.photos/600/3']},
      { id: 5, name: 'Hotel 5', rating: 4.3, location: 'Location 5', price: 100, images: ['https://picsum.photos/700/1', 'https://picsum.photos/700/2', 'https://picsum.photos/700/3']},
      { id: 6, name: 'Hotel 6', rating: 4.5, location: 'Location 6', price: 70, images: ['https://picsum.photos/210/1', 'https://picsum.photos/210/2', 'https://picsum.photos/210/3']},
      { id: 7, name: 'Hotel 7', rating: 4.2, location: 'Location 7', price: 80, images: ['https://picsum.photos/520/1', 'https://picsum.photos/520/2', 'https://picsum.photos/520/3']}
    ];
    

    this.mostRequestedRegions = [
      { id: 1, name: 'Hotel 1', rating: 4.5, location: 'Location 1', price: 70, images: ['https://picsum.photos/300/1', 'https://picsum.photos/300/2', 'https://picsum.photos/300/3']},
      { id: 2, name: 'Hotel 2', rating: 4.2, location: 'Location 2', price: 80, images: ['https://picsum.photos/100/1', 'https://picsum.photos/100/2', 'https://picsum.photos/100/3']},
      { id: 3, name: 'Hotel 3', rating: 4.8, location: 'Location 3', price: 90, images: ['https://picsum.photos/500/1', 'https://picsum.photos/500/2', 'https://picsum.photos/500/3']},
      { id: 4, name: 'Hotel 4', rating: 4.3, location: 'Location 4', price: 100, images: ['https://picsum.photos/600/1', 'https://picsum.photos/600/2', 'https://picsum.photos/600/3']},
      { id: 5, name: 'Hotel 5', rating: 4.3, location: 'Location 5', price: 100, images: ['https://picsum.photos/700/1', 'https://picsum.photos/700/2', 'https://picsum.photos/700/3']},
      { id: 6, name: 'Hotel 6', rating: 4.5, location: 'Location 6', price: 70, images: ['https://picsum.photos/210/1', 'https://picsum.photos/210/2', 'https://picsum.photos/210/3']},
      { id: 7, name: 'Hotel 7', rating: 4.2, location: 'Location 7', price: 80, images: ['https://picsum.photos/520/1', 'https://picsum.photos/520/2', 'https://picsum.photos/520/3']}
    ];
  }
}
