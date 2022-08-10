import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-professionaldashboard',
  templateUrl: './professionaldashboard.component.html',
  styleUrls: ['./professionaldashboard.component.css']
})
export class ProfessionaldashboardComponent implements OnInit {
  usersList: any = [];
  loggeInUserDetails: any = [];
  filteredUser :any = []
  isedit = false;
  public newProfessionalUser: User = {
    username: '',
    _id: '',
    password: '',
    email: '',
    city:'',
    Price:'',
    speciality:'',
    role: 'PROFESSIONAL'
  }

  constructor(private apiservice: UserService,private router:Router,
    private toaster:ToastrService) { }

  ngOnInit(): void {
    this.loggeInUserDetails = JSON.parse(localStorage.getItem("userDeatils"))
    this.apiservice.getuserDetails().subscribe(
      data => {
        this.usersList = data;
        this.filteredUser = this.usersList.filter(e => this.loggeInUserDetails._id === e._id)
        
        console.log(this.filteredUser);
        this.newProfessionalUser = this.filteredUser[0]

      },
      error => {

      }
    )
  }
update(){
  this.isedit = true;
}
delete(){
  let req = {
    activeuser : "false",
    _id:this.filteredUser[0]?._id,
    role:this.filteredUser[0]?.role,
    email:this.filteredUser[0]?.email,
    username:this.filteredUser[0]?.username,
    password:this.filteredUser[0]?.password,
    speciality:this.filteredUser[0]?.speciality,
    city:this.filteredUser[0]?.city,
    rating:this.filteredUser[0]?.rating,
    Price:this.filteredUser[0]?.price
  }
  this.apiservice.deleteprofile(req).subscribe(
    data =>{
      this.toaster.success("deactivated")
     
      this.router.navigate(['/login'])
    },
    error =>{
      this.toaster.success("cant update")

    }
  )
}
updateProfile(data)
{
  this.apiservice.updateProfile(data).subscribe(
    data =>{
      this.toaster.success("updated")
      this.isedit = false;
      this.ngOnInit()
    },
    error =>{
      this.toaster.success("cant update")

    }
  )
}
}
