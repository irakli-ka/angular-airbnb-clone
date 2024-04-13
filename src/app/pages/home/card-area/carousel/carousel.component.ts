import { Component, Input, OnInit, input } from '@angular/core';
import { Image } from '../../../../shared/models/Image.model';
import { Hotel } from '../../../../shared/models/Hotel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() hotel: Hotel =  {
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
  };;
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;

  selectedIndex = 0;

  // Function to change the selected image on dot click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  // function to change the current image to the previous image
  onPrevClick(): void {
    this.selectedIndex =
      this.selectedIndex === 0
        ? this.hotel.allImages.length - 1
        : this.selectedIndex - 1;
  }

  // function to change the current image to the next image
  onNextClick(): void {
    this.selectedIndex =
      this.selectedIndex === this.hotel.allImages.length - 1
        ? 0
        : this.selectedIndex + 1;
  }
}
