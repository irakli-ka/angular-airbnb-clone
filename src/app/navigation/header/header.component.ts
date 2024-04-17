import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../pages/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({});

  showAdvancedSearch = false;
  isLoggedIn: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchInput: [''],
      priceRange: [''],
      rooms: [''],
      beds: [''],
      bathrooms: [''],
      propertyType: [''],
      amenities: [''],
      hostLanguage: ['']
    });

    this.searchForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });

    this.userService.isLoggedIn.subscribe((isLoggedIn: any) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onLogout() {
    this.userService.logout();  
  }

  onAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onSubmit() {
    console.log(this.searchForm.value);
    if (this.searchForm.valid) {
      // Perform the search...
    }
  }
}