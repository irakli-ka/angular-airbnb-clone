import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEAPIURL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getTrips() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${BASEAPIURL}/get-reservations`, { headers });
  }

  addReservation(hotelId: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(`${BASEAPIURL}/add-reservation`, { hotelId: hotelId }, { headers });
  }
}
