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
  ngOnInit() {
    this.reservation.getTrips().subscribe((data) => {
      this.trips = data;

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
