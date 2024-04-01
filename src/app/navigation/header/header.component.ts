import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchForm = new FormGroup({
    searchInput: new FormControl(''),
    priceFilter: new FormControl(''),
  });

  isLoggedIn: any = false;

  constructor() {
    this.searchForm.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }
  
  onSubmit() {
    console.log(this.searchForm.value);
  }
}
