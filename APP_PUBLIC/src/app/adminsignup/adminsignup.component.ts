import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService) { }
  public AdminUser: User = {
    username: '',
    password: '',
    email: '',
    role: 'ADMIN'
  }

  ngOnInit(): void {
  }

  public signUpAdmin(newUser: User): void {
    if (newUser.email === '' || newUser.password === '' || newUser.username === '') {
      this.toastr.error('All fields are required !!!!', 'Invalid Input');
    } else if (new RegExp('^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$').test(newUser.email) === false) {
      this.toastr.error('Enter a Valid Input !!!', 'Invalid Email')
    } else {
      this.UserService.registerUser(newUser).then(() => {
        this.toastr.success('Created Admin Successfully !!!!', 'Sign Up Success');
        this.router.navigateByUrl('/adminlogin');
      });
    }
  }

}
