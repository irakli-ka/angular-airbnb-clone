import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../pages/user/user.service';
import { Router } from '@angular/router';
import { Amenity } from './models/amenities.model';
import { HotelService } from '../../core/services/hotel.service';
import { Observable } from 'rxjs';
import { Params, ActivatedRoute } from '@angular/router';
import { FilterService } from '../../core/services/fillter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  showAdvancedSearch: boolean = false;
  isLoggedIn: boolean = false;
  selectedAmenities: string[] = [];
  amenities: Amenity[] = [];
  roomTypes?: string[];


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private filterService: FilterService,
    private hotelService: HotelService,
    private route: ActivatedRoute
  ) {
    this.hotelService.roomTypes$.subscribe(roomTypes => {
      this.roomTypes = roomTypes;
    });
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      city: null,
      minRating: null,
      maxPricePerNight: null,
      roomType: null,
      amenities: null,
    });
    
    this.hotelService.getAllHotels().subscribe();

    this.userService.isLoggedIn.subscribe((isLoggedIn: any) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.filterService.getAmenities().subscribe((amenities: any) => {
      this.amenities = amenities;
    });

    this.filterService.parameters$.subscribe((parameters: any) => {
      this.searchForm.patchValue(parameters);
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
    this.filterService.setParameters(queryParams);
  }
}
