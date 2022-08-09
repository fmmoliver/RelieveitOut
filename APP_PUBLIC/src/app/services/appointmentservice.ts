import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AppointmentService {
    private APIURL = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    private handleError(error: any) {
        console.log(error, 'error')
    }


    getAppointments(newAppointment: Appointment): Promise<void | Appointment> {
        return this.http.post(this.APIURL + '/appointment', newAppointment)
            .toPromise()
            .then(response => response as Appointment)
            .catch(this.handleError)
    }


}
