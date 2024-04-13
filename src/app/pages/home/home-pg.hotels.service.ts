import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../shared/models/Hotel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePgHotelsService {

  baseApiURL = 'http://www.airbnb-digital-students.somee.com/';
  
  constructor(private http: HttpClient) { }

getAllHotels(): Observable<Hotel[]> {
  return this.http.get<Hotel[]>(this.baseApiURL + 'get-all-hotels');
}
}