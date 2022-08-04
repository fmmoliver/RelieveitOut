import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {
  usersList: any = [];
  loggeInUserDetails: any = [];
  filteredUser :any = []
  constructor(private apiservice: UserService) { }

  ngOnInit(): void {
    this.loggeInUserDetails = JSON.parse(localStorage.getItem("userDeatils"))
    this.apiservice.getuserDetails().subscribe(
      data => {
        this.usersList = data;
        this.filteredUser = this.usersList.filter(e => this.loggeInUserDetails._id === e._id)
        
        console.log(this.filteredUser);
        

      },
      error => {

      }
    )
  }


}
