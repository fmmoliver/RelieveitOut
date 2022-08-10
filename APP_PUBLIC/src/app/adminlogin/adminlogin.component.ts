import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService) { }
  public AdminUser: User = {
    password: '',
    email: '',
    role: 'ADMIN',
    speciality:''
  }


  ngOnInit(): void {}

  public LoginAdmin(newUser: User): void {
    if (newUser.email === '' || newUser.password === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.loginUser(newUser).then((response) => {
        if(response) {
          this.toastr.success('Admin Logged In Successfully !!!!', 'Login Success');
          this.router.navigateByUrl('/admindashboard');
        } else {
          this.toastr.error('Invalid Admin Credentials !!!!', 'Login Failed');
        }
      });
    }
  }
}
