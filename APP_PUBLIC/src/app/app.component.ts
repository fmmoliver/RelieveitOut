import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloggedIn = false;
  title = 'resolveitapp';
  constructor()
  {
    console.log();
    
  }
}
