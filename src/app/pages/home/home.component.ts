import { Component } from '@angular/core';
import { Hotel } from '../../shared/models/Hotel.model';
import { FilterService } from '../../core/services/fillter.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allHotels: Hotel[] = [];
  params: any;
  noResultsFound: boolean = false;

  constructor(private filterService: FilterService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.filterService.setParameters(params);
    });

    this.filterService.parameters$.subscribe((parameters: any) => {
      this.params = parameters;
      this.filterService.filterHotels(this.params).subscribe((response: any) => {
        if (response.length > 0) {
          this.noResultsFound = false;
          this.allHotels = response.map((hotel: Hotel) => {
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
        } else {
          this.noResultsFound = true;
        }
      }, error => {
        this.allHotels = [];
        this.noResultsFound = true;
      });
    });
  }
}
