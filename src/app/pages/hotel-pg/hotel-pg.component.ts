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

  hotel?: Hotel;

  constructor(
    private hotelInfoService: HotelInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const hotelId = params['id'];
      this.hotelInfoService.getHotelInfo(hotelId).subscribe((hotelInfo) => {
        this.hotel = hotelInfo as Hotel;
        console.log(this.hotel);
      });
    });
  }
}
