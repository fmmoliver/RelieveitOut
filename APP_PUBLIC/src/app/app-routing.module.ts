import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { CrisislineComponent } from './crisisline/crisisline.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ProfessionaldashboardComponent } from './professionaldashboard/professionaldashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"/home"},
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ourteam', component: OurteamComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'crisis', component: CrisislineComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'clientdashboard', component: ClientdashboardComponent },
  { path: 'professionaldashboard', component: ProfessionaldashboardComponent }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
