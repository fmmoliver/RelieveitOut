import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
<<<<<<< HEAD
  isloggedIn = false;
  constructor() { 
    console.log("checks");
    
  }

  ngOnInit(): void {
  this.isloggedIn = JSON.parse(localStorage.getItem("isloggedIn"));

=======
  private IsloggedIn = false;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('userdetails')) {
      this.IsloggedIn = true
    } else {
      this.IsloggedIn = false
    }
>>>>>>> 82441842bdfda97feed27a74b508258a21333e65
  }

}
