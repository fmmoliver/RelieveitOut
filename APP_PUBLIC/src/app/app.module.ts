import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';


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
import { GenericListFilterModule } from 'generic-list-filter'


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    FrameworkComponent,
    LoginComponent,HomepageComponent,
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
    CreateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    GenericListFilterModule,
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
      {path: 'create-appointment', component:CreateAppointmentComponent}
    ])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [CookieService],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
