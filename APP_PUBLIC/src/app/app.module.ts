import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


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
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './app-routing.module';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { GenericListFilterComponent } from './lib/generic-list-filter/lib/generic-list-filter.component'
import { RatingComponent } from './rating/rating.component';
import { CreateappointmentformComponent } from './createappointmentform/createappointmentform.component'


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    FrameworkComponent,
    LoginComponent,
    HomepageComponent,
    OurteamComponent,
    AppointmentsComponent,
    CrisislineComponent,
    AboutusComponent,
    SignupComponent,
    ProfessionaldashboardComponent,
    ClientdashboardComponent,
    FooterComponent,
    AdminsignupComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    CreateAppointmentComponent,
    RatingComponent,
    CreateappointmentformComponent,
    GenericListFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, AppRoutingModule,
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
      { path: 'adminlogin', component: AdminloginComponent },
      { path: 'adminsignup', component: AdminsignupComponent },
      { path: 'admindashboard', component: AdmindashboardComponent },
      { path: 'create-appointment/:professionalId/:doctorname/:speciality', component: CreateAppointmentComponent },
      { path: 'clientdashboard', component: ClientdashboardComponent },
      { path: 'professionaldashboard', component: ProfessionaldashboardComponent },
      { path: 'rating/:doctorname/:clientname', component: RatingComponent },
      { path: 'CreateAppointmentForm/:appointmentDate', component: CreateappointmentformComponent },
    ]),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CookieService],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
