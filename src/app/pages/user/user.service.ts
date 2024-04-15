import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASEAPIURL } from '../../../environments/environments';
import { UserRegistration } from './registration/user.registration.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(userData: UserRegistration): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/user/registerUser`, userData);
  }

  getByEmail(email: string): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/user/getByEmail`, { email });
  }
}
