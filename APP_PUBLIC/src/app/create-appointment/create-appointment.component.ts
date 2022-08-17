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

  public appointmentDoctor: Appointment = {
    doctorName: ''
  }

  constructor(private appointmentService: AppointmentService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.fetchappointments(this.appointmentDoctor)
    this.doctorName = this.route.snapshot.paramMap.get('doctorname');
  }

  public fetchappointments(newAppointment: Appointment): void {
    this.appointmentService.getAppointments(null).then((response) => {
      if (response) {
        this.events = (response as Appointment[]).map((appointmentDetails) => {
          return {
            start: subDays(startOfDay(new Date(appointmentDetails.dateTime)), 1),
            end: addDays(new Date(appointmentDetails.dateTime), 1),
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
        this.toastr.success('Fetched Appointments', 'Success !!');
      } else {

      }
    });
  }

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Fernanda Appointment Scheduled For 3 AM',
      color: { ...colors['red'] },
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    }
  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.toastr.success("Appointment Scheduled For " + this.doctorName + " For " + JSON.parse(localStorage.getItem("userDeatils")).username + " Successfully !!!")
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
