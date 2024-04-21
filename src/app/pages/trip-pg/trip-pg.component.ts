import { Component } from '@angular/core';
import { ReservationService } from '../../core/services/reservation.service';
import { HotelService } from '../../core/services/hotel.service';
import { Hotel } from '../../shared/models/Hotel.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-trip-pg',
  templateUrl: './trip-pg.component.html',
  styleUrl: './trip-pg.component.css'
})
export class TripPgComponent {
  trips: any;
  hotels: Hotel[] = [];
  constructor(private reservation: ReservationService, private hotelService: HotelService) { }
  //todo update html with carousel component and add more info about the hotel
  ngOnInit() {
    this.reservation.getTrips().subscribe((data) => {
      this.trips = data;
      console.log(this.trips);

      this.trips.forEach((trip: any) => {
        this.hotelService.getHotelInfo(trip.hotelId).pipe(
          map((hotel: any) => { 
            const allImages = [
              ...hotel.images.map((image: any) => image.url),
              ...hotel.rooms.flatMap((room: any) => room.roomImages.map((image: any) => image.url))
            ];
            return { ...hotel, allImages: allImages };
          })
        ).subscribe((hotel: Hotel) => {
          this.hotels.push(hotel);
        });
      });
    });
  }

}
