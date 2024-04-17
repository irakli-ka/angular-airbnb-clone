import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BASEAPIURL } from '../../../environments/environments';
import { UserRegistration } from './registration/user.registration.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  register(userData: UserRegistration): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/user/registerUser`, userData);
  }

  getByEmail(email: string): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/user/getByEmail`, { email });
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(userData: {email: string, password: string}): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/User/LogIn`, userData).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }
}
