import { Injectable } from '@angular/core';
import { CrisisLine } from '../models/crisisline';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CrisilineService {
    private APIURL = 'http://localhost:3000/apicrisisline';
    constructor(private http: HttpClient) { }

    private handleError(error: any) {
        console.log(error, 'error')
    }


    getCrisilines(newcrisiline: CrisisLine): Promise<void | CrisisLine> {
        return this.http.post(this.APIURL + '/crisislines', newcrisiline)
            .toPromise()
            .then(response => response as CrisisLine)
            .catch(this.handleError)
    }
    
}
