import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../models/rating';
import { RatingService } from '../services/ratingservice';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private RatingService: RatingService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  public nRating: Rating = {
    doctorName: '',
    clientName: '',
    dateTime: new Date(),
    rating: '',
  }

  ngOnInit(): void {
    this.nRating.doctorName = this.route.snapshot.paramMap.get('doctorname');
    this.nRating.clientName = this.route.snapshot.paramMap.get('clientname')
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
