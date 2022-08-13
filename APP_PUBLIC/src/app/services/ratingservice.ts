import { Injectable } from '@angular/core';
import { Rating } from '../models/rating';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RatingService {
  private APIURL = 'http://localhost:3000/apirating';
  constructor(private http: HttpClient) { }

  registerRating(newRating: Rating): Promise<void | Rating> {
    return this.http.post(this.APIURL + '/rating', newRating)
        .toPromise()
        .then(response => response as Rating)
        .catch(this.handleError)
}

  private handleError(error: any) {
      console.log(error, 'error')
  }

}
