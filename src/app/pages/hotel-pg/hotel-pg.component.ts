import { Component } from '@angular/core';
import { HotelInfoService } from './hotel.info.service';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../shared/models/Hotel.model';

@Component({
  selector: 'app-hotel-pg',
  templateUrl: './hotel-pg.component.html',
  styleUrl: './hotel-pg.component.css',
})
export class HotelPgComponent {
  hotel: Hotel = {
    allImages: [],
    id: undefined,
    name: '',
    address: undefined,
    description: '',
    rating: undefined,
    rooms: [],
    images: [],
    checkInTime: {
      ticks: undefined,
      days: undefined,
      hours: undefined,
      milliseconds: undefined,
      minutes: undefined,
      seconds: undefined,
      totalDays: undefined,
      totalHours: undefined,
      totalMilliseconds: undefined,
      totalMinutes: undefined,
      totalSeconds: undefined,
    },
    checkOutTime: {
      ticks: undefined,
      days: undefined,
      hours: undefined,
      milliseconds: undefined,
      minutes: undefined,
      seconds: undefined,
      totalDays: undefined,
      totalHours: undefined,
      totalMilliseconds: undefined,
      totalMinutes: undefined,
      totalSeconds: undefined,
    },
    owner: undefined,
  };

  constructor(
    private hotelInfoService: HotelInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const hotelId = params['id'];
      this.hotelInfoService.getHotelInfo(hotelId).subscribe((hotelInfo) => {
        this.hotel = {
          ...(hotelInfo as Hotel),
          allImages: [
            ...(hotelInfo as Hotel).images.map((image) => image.url),
            ...(hotelInfo as Hotel).rooms.flatMap((room) =>
              room.roomImages.map((image) => image.url)
            ),
          ],
        };
        console.log(this.hotel);
      });
    });
  }
}
