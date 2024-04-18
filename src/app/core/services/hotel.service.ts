import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BASEAPIURL } from '../../../environments/environments';
import { Hotel } from '../../shared/models/Hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private roomTypesSubject = new BehaviorSubject<string[]>([]);
  roomTypes$ = this.roomTypesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(BASEAPIURL + '/get-all-hotels').pipe(
      tap(hotels => {
        const roomTypes = [...new Set(hotels.flatMap(hotel => hotel.rooms.map(room => room.roomType)))];
        this.roomTypesSubject.next(roomTypes);
      })
    );
  }
}