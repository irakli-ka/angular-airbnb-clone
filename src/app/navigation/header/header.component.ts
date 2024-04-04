import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  showAdvancedSearch = false;
  isLoggedIn: any = true;

  constructor(private formBuilder: FormBuilder) { }

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