import { Component, OnInit } from '@angular/core';
import { CrisisLine } from '../models/crisisline';
import { CrisilineService } from '../services/crisislineservice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crisisline',
  templateUrl: './crisisline.component.html',
  styleUrls: ['./crisisline.component.css']
})
export class CrisislineComponent implements OnInit {
  crisilinesFinal: CrisisLine[]
  crisilines: CrisisLine[]
  constructor(private crisisservice: CrisilineService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchCrisislines()
  }

  public fetchCrisislines () {
    
    this.crisisservice.getCrisilines(null)
      .then((response) => { 
          this.crisilinesFinal = (response as CrisisLine[])
          this.crisilines = (response as CrisisLine[])
      })
  }

  public Filterlines(FilterType: string) {
    if(FilterType) {
      this.crisilinesFinal = this.crisilines.filter((crisis) => crisis.roomtype === FilterType);
    }  else {
      this.crisilinesFinal = this.crisilines;
    }
    
  }

  public buttonMessage(typeButton: string) {
    switch (typeButton) {
      case 'done':
        this.toastr.success('Thank you for trusting us. Please don\'t forget to rate your session.');
        break;
      case 'doneProfessional':
        this.toastr.success('Well done! Thank you for trusting us.');
        break;
      case 'rate':
        this.toastr.info('Wait next version!');
        break;
      case 'confirmed':
        this.toastr.success('Your appointment was confirmed.');
        break;
      case 'online':
        this.toastr.info('Wait next version!');
        break;
      case 'reschedule':
        this.toastr.info('Wait next version!');
        break;
      case 'cancelled':
        this.toastr.info('Your appointment was cancelled.');
        break;
    }
  }

}
