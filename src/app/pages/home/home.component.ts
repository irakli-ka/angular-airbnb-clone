import { Component } from '@angular/core';
import { HomePgHotelsService } from './home-pg.hotels.service';
import { Hotel } from '../../shared/models/Hotel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mostRequestedHotels: any;
  allHotels: Hotel[] = [];

  constructor(private HomePgHotelsService: HomePgHotelsService) {}

ngOnInit() {
  this.HomePgHotelsService.getAllHotels().subscribe((hotels: Hotel[]) => {
    this.allHotels = hotels.map(hotel => {
      const allImages = [
        ...hotel.images.map(image => image.url), 
        ...hotel.rooms.flatMap(room => room.roomImages.map(image => image.url))
      ];
      const updatedHotel = {
        ...hotel,
        allImages: allImages
      };
      return updatedHotel;
    });
  });
}
}
