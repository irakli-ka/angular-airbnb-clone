import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPgComponent } from './pages/user/user-pg/user-pg.component';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelPgComponent } from './pages/hotel-pg/hotel-pg.component';
import { TripPgComponent } from './pages/trip-pg/trip-pg.component';
import { NotFoundPgComponent } from './pages/not-found-pg/not-found-pg.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in-gurad.guard';

const routes: Routes = [
  { path: 'user', component: UserPgComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent, canActivate: [LoggedInGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
  { path: 'hotel/:name/:id', component: HotelPgComponent},
  { path: 'trip', component: TripPgComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
