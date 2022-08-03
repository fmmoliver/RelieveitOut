import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
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
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './app-routing.module';

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

    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
