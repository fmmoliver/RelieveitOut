import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private APIURL = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    registerUser(newUser: User): Promise<void | User> {
        return this.http.post(this.APIURL + '/register', newUser)
            .toPromise()
            .then(response => response as User)
            .catch(this.handleError)
    }

    loginUser(newUser: User): Promise<void | User> {
        return this.http.post(this.APIURL + '/login', newUser)
            .toPromise()
            .then(response => response as User)
            .catch(this.handleError)
    }

    private handleError(error: any) {
        console.log(error, 'error')
    }

}