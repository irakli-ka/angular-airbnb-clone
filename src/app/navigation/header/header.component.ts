import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../pages/user/user.service';
import { Router } from '@angular/router';
import { Amenity } from './amenities.model';
import { FillterService } from './fillter.service';
import { HotelService } from '../../core/services/hotel.service';
import { Observable } from 'rxjs';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  showAdvancedSearch = false;
  isLoggedIn: boolean = false;
  selectedAmenities: string[] = [];
  amenities: Amenity[] = [];
  roomTypes$: Observable<string[]>;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private filterService: FillterService,
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {
    this.roomTypes$ = this.hotelService.roomTypes$;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      city: null,
      minRating: null,
      maxPricePerNight: null,
      roomType: null,
      amenities: null,
    });

    this.userService.isLoggedIn.subscribe((isLoggedIn: any) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.filterService.getAmenities().subscribe((amenities: any) => {
      this.amenities = amenities;
    });
  }

  onLogout() {
    this.userService.logout();
  }

  onAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }


  onSubmit() {
    const value = this.searchForm.value;
    const queryParams: Params = Object.fromEntries(
      Object.entries(value).filter(([key, val]) => {
        return val !== null && val !== undefined && val !== '' && !(Array.isArray(val) && val.length === 0);
      })
    );
  
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: null,
      }
    );
    this.filterService.filterHotels(queryParams).subscribe((response: any) => {
      console.log(response);
    });
  }
}
