import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserPgComponent } from './user-pg/user-pg.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'; 
import {MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserPgComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class UserModule { }
