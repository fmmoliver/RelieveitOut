import { Injectable } from '@angular/core';
import { Rating } from '../models/rating';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RatingService {
  private APIURL = 'http://localhost:3000/apirating';
  constructor(private http: HttpClient) { }

  private handleError(error: any) {
      console.log(error, 'error')
  }

}
