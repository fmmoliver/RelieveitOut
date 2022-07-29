import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { CrisislineComponent } from './crisisline/crisisline.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { ProfessionaldashboardComponent } from './professionaldashboard/professionaldashboard.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    LoginComponent,
    OurteamComponent,
    AppointmentsComponent,
    CrisislineComponent,
    AboutusComponent,
    SignupComponent,
    ProfessionaldashboardComponent,
    ClientdashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'ourteam', component: OurteamComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'crisis', component: CrisislineComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'clientdashboard', component: ClientdashboardComponent },
      { path: 'professionaldashboard', component: ProfessionaldashboardComponent }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
