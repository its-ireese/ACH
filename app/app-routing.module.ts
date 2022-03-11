import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { HomePatientComponent } from './home/home-patient/home-patient.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HomeDoctorComponent } from './home/home-doctor/home-doctor.component';
import { PatientComponent } from './users/patient/patient.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LogoutComponent } from './users/logout/logout.component';
import { DoctorListComponent } from './users/doctor/doctor-list/doctor-list.component';
import { AdminGuard } from './users/admin.guard';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patient-home', component: HomePatientComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'doctor-home', component: HomeDoctorComponent},
  {path: 'view-patients', component: PatientComponent},
  {path: 'view-doctors', component: DoctorListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
