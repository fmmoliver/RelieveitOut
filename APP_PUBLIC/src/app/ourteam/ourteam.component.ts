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
    rating:['>4.5','>4','>3'],
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

  // //for city
  // temparray: any = [];
  // newarray: any = [];
  // onchange(event:any){
  //   if(event.target.checked){
  //     this.temparray= this.tempprofessional.filter((e:any)=> e.city == event.target.value);
  //     this.professionals = [];
  //     this.newarray.push(this.temparray);
  //     for( let i=0;i<this.newarray.length;i++){
  //       var firstarray = this.newarray[i];
  //       console.log(firstarray);
  //     for( let i=0; i<firstarray.length; i++){
  //       var obj = firstarray[i];
  //       this.professionals.push(obj);
  //     }
  //   }
  //   }
  //   else{
  //     this.temparray= this.professionals.filter((e:any)=> e.city != event.target.value);
  //     this.newarray = [];
  //     this.professionals = [];
  //     this.newarray.push(this.temparray);
  //     for( let i=0;i<this.newarray.length;i++){
  //       var firstarray = this.newarray[i];
  //       console.log(firstarray);
  //     for( let i=0; i<firstarray.length; i++){
  //       var obj = firstarray[i];
  //       this.professionals.push(obj);
  //     }
  //   }

  //   }
  // }

  // //for service 
  // onchangeservice(event:any){
  //   if(event.target.checked){
  //     this.temparray= this.tempprofessional.filter((e:any)=> e.typeOfService == event.target.value);
  //     this.professionals = [];
  //     this.newarray.push(this.temparray);
  //     for( let i=0;i<this.newarray.length;i++){
  //       var firstarray = this.newarray[i];
  //       console.log(firstarray);
  //     for( let i=0; i<firstarray.length; i++){
  //       var obj = firstarray[i];
  //       this.professionals.push(obj);
  //     }
  //   }
  //   }
  //   else{
  //     this.temparray= this.professionals.filter((e:any)=> e.typeOfService != event.target.value) ;
  //     this.newarray = [];
  //     this.professionals = [];
  //     this.newarray.push(this.temparray);
  //     for( let i=0;i<this.newarray.length;i++){
  //       var firstarray = this.newarray[i];
  //       console.log(firstarray);
  //     for( let i=0; i<firstarray.length; i++){
  //       var obj = firstarray[i];
  //       this.professionals.push(obj);
  //     }
  //   }

  //   }
  // }


  // //for filters

  // checkboxcity:any = [
  //   {
  //     id:1,
  //     type:"checkbox",
  //     city: "Waterloo"
  //   },
  //   {
  //     id:2,
  //     type:"checkbox",
  //     city: "Kitchener"
  //   },
  //   {
  //     id:3,
  //     type:"checkbox",
  //     city: "Burlington"
  //   },
  //   {
  //     id:4,
  //     type:"checkbox",
  //     city: "Toronto"
  //   }
  // ]

  // checkboxservice:any = [
  //   {
  //     id:1,
  //     type:"checkbox",
  //     typeOfService: "Art Therapy"
  //   },
  //   {
  //     id:2,
  //     type:"checkbox",
  //     typeOfService: "Trauma Focused"
  //   },
  //   {
  //     id:3,
  //     type:"checkbox",
  //     typeOfService: "Hypnotherapist"
  //   },
  //   {
  //     id:4,
  //     type:"checkbox",
  //     typeOfService: "Cognitive Behaviour"
  //   }
  // ]

  filterChange(appliedfilters){

    this.professionals = this.tempprofessional;
    this.city =   appliedfilters.appliedFilterValues.city;
    this.speciality = appliedfilters.appliedFilterValues.speciality;
    this.session_duration = appliedfilters.appliedFilterValues.session_duration;

    if(this.city){
      this.professionals = this.professionals.filter(item=>item.city === this.city);
    }
    if(this.speciality){
      this.professionals = this.professionals.filter(item=>item.speciality === this.speciality);
    }
    if(this.session_duration){
      this.professionals = this.professionals.filter(item=>item.session_duration === this.session_duration);
    }

  }



}
