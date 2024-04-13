import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './pages/home/home.module';
import { UserModule } from './pages/user/user.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HotelPgComponent } from './pages/hotel-pg/hotel-pg.component';
import { TripPgComponent } from './pages/trip-pg/trip-pg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPgComponent } from './pages/not-found-pg/not-found-pg.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelPgComponent,
    TripPgComponent,
    NotFoundPgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
