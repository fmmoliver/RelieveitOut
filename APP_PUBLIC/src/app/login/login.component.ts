import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService, private cookieService: CookieService) { }
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
<<<<<<< HEAD
          localStorage.setItem("userDeatils",JSON.stringify(response))
          localStorage.setItem("isloggedIn",JSON.stringify(true))
          localStorage.setItem("isClient",JSON.stringify(true))
          this.router.navigateByUrl('/clientdashboard');

=======
          this.cookieService.set('userdetails', JSON.stringify(response));
          this.router.navigateByUrl('/appointments');
>>>>>>> 82441842bdfda97feed27a74b508258a21333e65
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
<<<<<<< HEAD
          localStorage.setItem("userDeatils",JSON.stringify(response))
          localStorage.setItem("isloggedIn",JSON.stringify(true))
          localStorage.setItem("isClient",JSON.stringify(false))
          this.router.navigateByUrl('/professionaldashboard');

=======
          this.router.navigateByUrl('/ourteam');
>>>>>>> 82441842bdfda97feed27a74b508258a21333e65
        } else {
          this.toastr.error('Invalid Login Credentials !!!!', 'Login Failed');
        }
      }); 
    }
  }



}
