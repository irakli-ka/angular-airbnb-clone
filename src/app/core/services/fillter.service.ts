import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEAPIURL } from '../../../environments/environments';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private parametersSubject = new BehaviorSubject<any>({});
  parameters$ = this.parametersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAmenities() {
    return this.http.get(`${BASEAPIURL}/getall`);
  }

  filterHotels(queryParams: any) {
    return this.http.get(`${BASEAPIURL}/api/Apartments/filter`, { params: queryParams });
  }

  setParameters(params: any) {
    this.parametersSubject.next(params);
  }

}

