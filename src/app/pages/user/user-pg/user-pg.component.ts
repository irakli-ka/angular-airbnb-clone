import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-pg',
  templateUrl: './user-pg.component.html',
  styleUrls: ['./user-pg.component.css']
})
export class UserPgComponent implements OnInit {
  userInfoForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      cardNumber: [''],
      changePassword: [false],
      password: [''],
      confirmPassword: ['']
    });

  }

  

  onChangePassword() {
    const changePassword = this.userInfoForm.get('changePassword');
    changePassword?.setValue(!changePassword?.value);
  }

  onSubmit() {
    if (this.userInfoForm.valid) {
      // Update the user's info...
    }
  }
}