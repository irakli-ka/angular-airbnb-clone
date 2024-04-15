import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder , private UserService: UserService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      personalNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  

onSubmit() {
  if (this.registerForm.valid && this.registerForm.value.password === this.registerForm.value.confirmPassword) {
    this.UserService.getByEmail(this.registerForm.value.email).subscribe({
      next: (user) => {
        if (user && user.length > 0) {
          alert('A user with this email already exists');
        } else {
          this.UserService.register(this.registerForm.value).subscribe({
            next: (response) => {
              alert('Registration successful ' + response);
              this.router.navigate(['/login']);
            },
            error: (error) => alert('Registration error ' + error),
          });
        }
      },
      error: (error) => alert('Error checking email ' + error),
    });
  } else if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
    alert('Passwords do not match');
  } else {
    alert('Please fill in all fields correctly');
  }
}
}