import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../shared/models/Hotel.model';
import { Observable } from 'rxjs';
import { BASEAPIURL } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HomePgHotelsService {
  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(BASEAPIURL + '/get-all-hotels');
  }
}
