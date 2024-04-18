import { Component } from '@angular/core';
import { Hotel } from '../../shared/models/Hotel.model';
import { HotelService } from '../../core/services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mostRequestedHotels: any;
  allHotels: Hotel[] = [];

  constructor(private HotelService: HotelService) {}

  ngOnInit() {
    this.HotelService.getAllHotels().subscribe((hotels: Hotel[]) => {
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
