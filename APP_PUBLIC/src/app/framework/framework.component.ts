import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  private IsloggedIn = false;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('userdetails')) {
      this.IsloggedIn = true
    } else {
      this.IsloggedIn = false
    }
  }

}
