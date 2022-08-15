import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {
  usersList: any = [];
  loggeInUserDetails: any = [];
  filteredUser :any = [];
  isedit = false;
  public newClientUser: User = {
    username: '',
    _id: '',
    password: '',
    email: '',
    city:'',
    Price:'',
    speciality:'',
    role: 'CLIENT'
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
        this.newClientUser = this.filteredUser[0]

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
      _id:this.filteredUser[0]._id
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
  if(data.Price !== undefined  && data.email !== '' && data.username !== '' && data.password !== "" && data.email !== "") {
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
  } else {
    this.toaster.error("Please enter all fields !!!!")
  }
}
}
