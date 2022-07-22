import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CrisislineComponent } from './crisisline/crisisline.component';
import { AboutusComponent } from './aboutus/aboutus.component'

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    LoginComponent,
    OurteamComponent,
    AppointmentsComponent,
    CrisislineComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'ourteam', component: OurteamComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'crisis', component: CrisislineComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
