import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEAPIURL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HotelInfoService {

  constructor(private http:HttpClient) { }

  getHotelInfo(hotelId: string){
    return this.http.get(`${BASEAPIURL}/get-by-id?id=${hotelId}`);
  }
}
