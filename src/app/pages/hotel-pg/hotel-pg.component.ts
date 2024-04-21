import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../shared/models/Hotel.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user/user.service';
import { HotelService } from '../../core/services/hotel.service';
import { ReservationService } from '../../core/services/reservation.service';


@Component({
  selector: 'app-hotel-pg',
  templateUrl: './hotel-pg.component.html',
  styleUrl: './hotel-pg.component.css',
})
export class HotelPgComponent {
  //TODO second datepicker only available after inputing value in first datepicker
  today = new Date();
  tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  startDate?: Date | null;
  endDate?: Date | null;
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
cardNumber: any;

  constructor(
    private hotelInfoService: HotelService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private userService: UserService,
    private reservationService: ReservationService
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

  calculateTotalPrice(roomPricePerNight: number): number {
    if (!this.startDate || !this.endDate) {
      return 0;
    }
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const numberOfDays = Math.round((this.endDate.getTime() - this.startDate.getTime()) / millisecondsPerDay);
  
    return numberOfDays * roomPricePerNight;
  }

  @ViewChild('paymentDialog') paymentDialog?: TemplateRef<any>;
  reserveDialog(): void {
    this.userService.isLoggedIn.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        alert('Please login to reserve a room!');
        return;
      } else {
        const dialogRef = this.dialog.open(this.paymentDialog!, {
          width: '500px',
          height: 'auto'
        });
        this.cardNumber = localStorage.getItem('cardNumber');
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    });
  }

  reserveRoom(hotelId: any, dialogRef: MatDialogRef<any>): void {
    
    
    this.reservationService.addReservation(hotelId.toString()).subscribe(() => {
      alert('Room reserved successfully! Go to your trip page to see your reservations.');
    });
    dialogRef.close();
  }
  
}
