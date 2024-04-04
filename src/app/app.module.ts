import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './pages/home/home.module';
import { UserModule } from './pages/user/user.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HotelPgComponent } from './pages/hotel-pg/hotel-pg.component';
import { TripPgComponent } from './pages/trip-pg/trip-pg.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelPgComponent,
    TripPgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    UserModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angular-airbnb-clone-3692d","appId":"1:283290778818:web:ce0ed5f90e1b0d390a4f5b","storageBucket":"angular-airbnb-clone-3692d.appspot.com","apiKey":"AIzaSyAl9K0FGcvpWsY-8DJxn0QeZtFUXiQ6xyw","authDomain":"angular-airbnb-clone-3692d.firebaseapp.com","messagingSenderId":"283290778818","measurementId":"G-C6F8DT66HF"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideDatabase(() => getDatabase())
  ],
  providers: [
    provideAnimationsAsync(),
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
