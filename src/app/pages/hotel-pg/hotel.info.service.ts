import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addReservation(hotelId: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(`${BASEAPIURL}/add-reservation`, { hotelId: hotelId }, { headers });
  }

}
