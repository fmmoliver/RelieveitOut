import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-createappointmentform',
  templateUrl: './createappointmentform.component.html',
  styleUrls: ['./createappointmentform.component.css']
})
export class CreateappointmentformComponent implements OnInit {
  public newAppointment: Appointment = {
    doctorName: '',
    clientName: '',
    dateTime: new Date(),
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newAppointment.doctorName = this.route.snapshot.paramMap.get('doctorname');
    this.newAppointment.clientName = this.route.snapshot.paramMap.get('clientname');
  }

}
