import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPgComponent } from './pages/user/user-pg/user-pg.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelPgComponent } from './pages/hotel-pg/hotel-pg.component';
import { TripPgComponent } from './pages/trip-pg/trip-pg.component';

const routes: Routes = [
  { path: 'user', component: UserPgComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'hotel/:id', component: HotelPgComponent},
  { path: 'trip', component: TripPgComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
