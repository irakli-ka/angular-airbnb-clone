import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BASEAPIURL } from '../../../environments/environments';
import { UserRegistration } from './registration/user.registration.model';
import * as jwt_decode from 'jwt-decode';

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

  getByEmail(email?: string): Observable<any> {
    if (!email) {
      email = localStorage.getItem('userEmail') as string;
    }
    return this.http.post(`${BASEAPIURL}/api/user/getByEmail`, { email }).pipe(
      tap((response: any) => {
        if (response && response.length > 0) {
          const user = response[0];
          localStorage.setItem('userId', user.id);
        }
      })
    );
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(userData: {email: string, password: string}): Observable<any> {
    return this.http.post(`${BASEAPIURL}/api/User/LogIn`, userData).pipe(
      tap(() => {
        this.loggedIn.next(true);
        localStorage.setItem('userEmail', userData.email);
      })
    );
  }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
  }


  updateUserData(userData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.put(`${BASEAPIURL}/api/User/updateuserdata`, userData, { headers });
  }
 
  isTokenValid(token: string): boolean {
    try {
      const decodedToken = jwt_decode.jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // get current time in seconds

      if (decodedToken && 'exp' in decodedToken && decodedToken.exp! > currentTime) {
        return true; // token is not expired
      } else {
        return false; // token is expired or 'exp' does not exist
      }
    } catch (error) {
      return false; // token is invalid
    }
  }

}
