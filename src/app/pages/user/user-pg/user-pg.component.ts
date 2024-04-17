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
      userName: [null],
      email: [null],
      phoneNumber: [null],
      cardNumber: [null],
      changePassword: [false],
      password: [null],
      confirmPassword: [null]
    });

    this.userService.getByEmail().subscribe({
      next: (user: any) => {
        console.log('User info - ', user[0]);
        this.userInfoForm.patchValue({
          userName: user[0].userName,
          email: user[0].email,
          phoneNumber: user[0].phone,
        });
      },
      error: (error: any) => {
        alert(`Failed to get user info${error}`);
      }
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