import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../models/rating';
import { RatingService } from '../services/ratingservice';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private RatingService: RatingService, private router: Router, private toastr: ToastrService) { }

  public nRating: Rating = {
    doctorName: 'Dr. Fernanda Oliveira',
    clientName: 'Luke Skywalker',
    dateTime: new Date(),
    rating: '',
  }

  ngOnInit(): void {
  }

  public InsertRate (newRating: Rating): void {
    if (newRating.rating === '' || newRating.rating === 'Select') {
      this.toastr.error('The rating value is required.', 'Invalid Input');
    } else {
      this.RatingService.registerRating(newRating).then(() => {
        this.toastr.success('Rated successfully !!');
        this.router.navigateByUrl('/appointments');
      });
    }
  }
}
