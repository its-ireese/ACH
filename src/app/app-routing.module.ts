import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeComponent } from './HomePages/Doctor/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './HomePages/Patient/patient-home.component';
import { WelcomeComponent } from './HomePages/welcome/welcome.component';
import { LoginComponent } from './Users/Login/login/login.component';
import { PatientComponent } from './Users/Patient/patient.component';
import { ProfileComponent } from './Users/Profile/profile.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: WelcomeComponent},
  {path: 'patient-home', component: PatientHomeComponent},
  {path: 'user-details', component: ProfileComponent},
  {path: 'doctor-home', component: DoctorHomeComponent},
  {path: 'view-patients', component: PatientComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
