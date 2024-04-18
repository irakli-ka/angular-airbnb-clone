import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEAPIURL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FillterService {

  constructor(private http: HttpClient) { }

  getAmenities() {
    return this.http.get(`${BASEAPIURL}/getall`);
  }

  filterHotels(queryParams: any) {
    return this.http.get(`${BASEAPIURL}/api/Apartments/filter`, { params: queryParams });
  }

}

