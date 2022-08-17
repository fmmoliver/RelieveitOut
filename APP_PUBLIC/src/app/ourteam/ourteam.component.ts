import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {

  professionals : User[]
  public ProfessionalUser: User = {
    role: 'PROFESSIONAL'
  }

  city;
  speciality;
  session_duration;
  rating;

  filterList = {
    city : ['Waterloo', 'Kitchener', 'Burlington', 'Toronto', 'Hamilton'],
    speciality: ['Trauma Focused', 'Art Therapy', 'Cognitive Behaviour', 'Hypnotherapist'],
    rating:['4.5','4','3'],
    session_duration:['one hour','two hours', 'more than two hours']
    //here you can add as many filters as you want.
    };  

  tempprofessional : User[];

  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService){ 
    
  }

  ngOnInit(): void {
     this.fetchProfessionals(this.ProfessionalUser)

  
    
  }

  public fetchProfessionals(newUser: User): void{

    this.UserService.getUsers(newUser).then((response) => {
      if(response) {
        this.professionals= response as User[];
        this.tempprofessional = response as User[];
      } else {
        // this.toastr.error('Invalid Login Credentials !!!!', 'Login Failed');
      }
    });

  }

  


  filterChange(appliedfilters){

    this.professionals = this.tempprofessional;
    this.city =   appliedfilters.appliedFilterValues.city;
    this.speciality = appliedfilters.appliedFilterValues.speciality;
    this.session_duration = appliedfilters.appliedFilterValues.session_duration;
    this.rating = appliedfilters.appliedFilterValues.rating;

    if(this.city){
      this.professionals = this.professionals.filter(item=>item.city === this.city);
    }
    if(this.speciality){
      this.professionals = this.professionals.filter(item=>item.speciality === this.speciality);
    }
    if(this.session_duration){
      this.professionals = this.professionals.filter(item=>item.session_duration === this.session_duration);
    }
    if(this.rating){
      this.professionals = this.professionals.filter(item=>item.rating >= this.rating);
    }

  }



}
