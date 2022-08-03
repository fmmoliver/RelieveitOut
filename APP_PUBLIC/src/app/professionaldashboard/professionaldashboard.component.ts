import { Component, OnInit } from '@angular/core';
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
