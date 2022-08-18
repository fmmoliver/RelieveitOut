import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';

import { User } from '../models/user';
import { AppointmentService } from '../services/appointmentservice';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from '../models/appointment';
import * as moment from 'moment';



const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-create-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  professionals: User[];
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Deleted', event);
      },
    },
  ];
  refresh = new Subject<void>();
  activeDayIsOpen: boolean = true;
  public ProfessionalUser: User = {
    role: 'PROFESSIONAL'
  }
  public doctorName = '';
  public doctorSpeciality = '';

  public appointmentDoctor: Appointment = {
    doctorName: ''
  }

  public newAppointment: Appointment = {
    doctorName: '',
    clientName: '',
    speciality: '',
    dateTime: null,
    status: 'confirmed'
  }

  constructor(private appointmentService: AppointmentService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => this.fetchappointments(this.appointmentDoctor), 2000)
    this.doctorName = this.route.snapshot.paramMap.get('doctorname');
    this.doctorSpeciality = this.route.snapshot.paramMap.get('speciality');
  }

  public fetchappointments(newAppointment: Appointment): void {
    this.appointmentService.getAppointments(null).then((response) => {
      if (response) {
        this.events = (response as Appointment[]).map((appointmentDetails) => {
          return {
            start: startOfDay(new Date(appointmentDetails.dateTime)),
            end: endOfDay(new Date(appointmentDetails.dateTime)),
            title: appointmentDetails.doctorName + ' - ' + appointmentDetails.speciality,
            color: { ...colors['red'] },
            actions: this.actions,
            allDay: true,
            resizable: {
              beforeStart: true,
              afterEnd: true,
            },
            draggable: true,
          }

        })
      } else {

      }
    });
  }

  events: CalendarEvent[] = [];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (events.length === 0) {
     
      this.newAppointment.doctorName = this.doctorName
      this.newAppointment.clientName = JSON.parse(localStorage.getItem("userDeatils")).username
      this.newAppointment.speciality = this.doctorSpeciality
      this.newAppointment.dateTime = new Date(date)
      this.appointmentService.createappointment(this.newAppointment).then((response) => {
        this.toastr.success("Appointment Scheduled For " + this.doctorName + " For " + JSON.parse(localStorage.getItem("userDeatils")).username + " at 10:00 AM", "Appointment Scheduled !")
        setTimeout(() => {
          window.location.href = '/appointments'
        }, 3000);
      })
    } else {
      const eventDetails = events[0]
      console.log(events, 'events')
      this.toastr.error("Already Scheduled For " + eventDetails.title + "", "Days Fully Booked !!")
      // this.toastr.info("Exis")
    }

  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('test')
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: { ...colors['red'] },
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
