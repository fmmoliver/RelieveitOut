import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointmentservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {

  appointments: Appointment[]

  public appointmentClient: Appointment = {
    clientName: 'Luke Skywalker'
  }

  public appointmentDoctor: Appointment = {
    doctorName: 'Dr. Fernanda Oliveira'
  }

  constructor(private AppointmentService: AppointmentService, private router: Router, private toastr: ToastrService){

  }

  ngOnInit(): void {
    this.fetchAppointments(this.appointmentClient);
  }

  public fetchAppointments (newAppointment: Appointment): void{

    this.AppointmentService
      .getAppointments(newAppointment)
      .then((response) => {
        this.appointments = (response as Appointment[])
          .sort(function(x,y) {
            if (x.dateTime > y.dateTime) {
                return 1;
            }

            if (x.dateTime < y.dateTime) {
                return -1;
            }
            return 0;
          }) ;
      });

  }

  public buttonMessage(typeButton: string) {
    switch (typeButton) {
      case 'done':
        this.toastr.success('Thank you for trusting us. Please don\'t forget to rate your session.');
        break;
      case 'rate':
        this.toastr.info('Wait next version!');
        break;
      case 'confirmed':
        this.toastr.success('Your appointment was confirmed.');
        break;
      case 'online':
        this.toastr.info('Wait next version!');
        break;
      case 'reschedule':
        this.toastr.info('Wait next version!');
        break;
      case 'cancelled':
        this.toastr.info('Your appointment was cancelled.');
        break;
    }
  }


}
