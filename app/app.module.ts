import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { PatientComponent } from './users/patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DoctorComponent } from './users/doctor/doctor.component';
import { DoctorListComponent } from './users/doctor/doctor-list/doctor-list.component';
import { LogoutComponent } from './users/logout/logout.component';
import { HomeDoctorComponent } from './home/home-doctor/home-doctor.component';
import { HomePatientComponent } from './home/home-patient/home-patient.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';


@NgModule({
  declarations: [
    PatientComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    UserDetailsComponent,
    HomePatientComponent,
    HomeDoctorComponent,
    WelcomeComponent,
    DoctorComponent,
    DoctorListComponent,
    LogoutComponent,
    HomeAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
