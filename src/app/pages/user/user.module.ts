import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserPgComponent } from './user-pg/user-pg.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserPgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
