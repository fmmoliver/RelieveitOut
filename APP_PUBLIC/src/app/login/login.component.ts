import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService) { }
  public ClientUser: User = {
    password: '',
    email: '',
    role: 'CLIENT'
  }

  public ProfessionalUser: User = {
    password: '',
    email: '',
    role: 'PROFESSIONAL'
  }

  ngOnInit(): void {}

  public LoginClient(newUser: User): void {
    if (newUser.email === '' || newUser.password === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.loginUser(newUser).then((response) => {
        if(response) {
          this.toastr.success('Client Logged In Successfully !!!!', 'Login Success');
          this.router.navigateByUrl('/clientdashboard');
        } else {
          this.toastr.error('Invalid Login Credentials !!!!', 'Login Failed');
        }
      });
    }
  }

  public LoginProfessional(newUser: User): void {
    if (newUser.email === '' || newUser.password === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.loginUser(newUser).then((response) => {
        if(response) {
          this.toastr.success('Professional Logged In Successfully !!!!', 'Login Success');
          this.router.navigateByUrl('/professionaldashboard');
        } else {
          this.toastr.error('Invalid Login Credentials !!!!', 'Login Failed');
        }
      }); 
    }
  }



}
