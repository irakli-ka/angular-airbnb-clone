import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-pg',
  templateUrl: './user-pg.component.html',
  styleUrls: ['./user-pg.component.css']
})
export class UserPgComponent implements OnInit {
  userInfoForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

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

    // Load the user's info into the form...
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