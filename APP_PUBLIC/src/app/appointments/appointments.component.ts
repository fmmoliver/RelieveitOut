import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointmentservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private AppointmentService: AppointmentService, private router: Router, private toastr: ToastrService){

  }

  //I need to know the role of the user logged in
  //if the role is Professional I have to search by doctorName
  //if the role is Client I have to search by clientName

  ngOnInit(): void {

  }

  /*
    public fetchAppointments (newAppointment: Appointment): void{
      this.AppointmentService.getAppointments(newAppointment).then((response) => {
        if(response) {

        }
      });
    }
*/
  public buttonMessage() {
    this.toastr.info('Implementent in next version!');
  }
}
