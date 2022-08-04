import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  isloggedin = false;
  isClient = false
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isloggedin = JSON.parse(localStorage.getItem("isloggedIn"))
    this.isClient = JSON.parse(localStorage.getItem("isClient"))
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
