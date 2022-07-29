import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService) { }
  public newClientUser: User = {
    username: '',
    password: '',
    email: '',
    role: 'CLIENT'
  }

  public newProfessionalUser: User = {
    username: '',
    password: '',
    email: '',
    role: 'PROFESSIONAL'
  }



  ngOnInit(): void {
  }

  public signUpClient(newUser: User): void {
    if (newUser.email === '' || newUser.password === '' || newUser.username === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.registerUser(newUser).then(() => {
        this.toastr.success('Created Client Successfully !!!!', 'Sign Up Success');
        this.router.navigateByUrl('/login');
      });
    }
  }

  public signUpProfessional(newUser: User): void {
    if (newUser.email === '' || newUser.password === '' || newUser.username === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.registerUser(newUser).then(() => {
        this.toastr.success('Created Professional Successfully !!!!', 'SignUp Success');
        this.router.navigateByUrl('/login');
      }); 
    }
  }

}
