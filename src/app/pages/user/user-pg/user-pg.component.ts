import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

interface User {
  id: string;
  userName: string;
  email: string;
  newPassword: string;
  phone: string;
  personalNumber: string;
  gender: string;
}

@Component({
  selector: 'app-user-pg',
  templateUrl: './user-pg.component.html',
  styleUrls: ['./user-pg.component.css']
})

export class UserPgComponent implements OnInit {
  userInfoForm: FormGroup = new FormGroup({});
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      personalNumber: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required, ],
      gender: [null, Validators.required],
      cardNumber: [null, [Validators.minLength(16), Validators.maxLength(16)]],
    });

    this.userService.getByEmail().subscribe({
      next: (user: any) => {
        this.userInfoForm.patchValue({
          userName: user[0].userName,
          email: user[0].email,
          phone: user[0].phone,
          personalNumber: user[0].personalNumber,
          gender: user[0].gender,
          cardNumber: localStorage.getItem('cardNumber')
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
      localStorage.setItem('cardNumber', this.userInfoForm.value.cardNumber);
      localStorage.setItem('userEmail', this.userInfoForm.value.email);
      
      const user: User = {
        id: localStorage.getItem('userId') ?? '',
        userName: this.userInfoForm.value.userName,
        email: this.userInfoForm.value.email,
        newPassword: this.userInfoForm.value.password,
        phone: this.userInfoForm.value.phoneNumber,
        personalNumber: this.userInfoForm.value.personalNumber,
        gender: this.userInfoForm.value.gender
      };

      this.userService.updateUserData(user).subscribe({
        next: (response: any) => {
          alert('User info updated successfully');
          location.reload();
        },
        error: (error: any) => {
          alert(`Failed to update user info`);
        }
      });
    }
  }
}