import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './HomePages/Admin/admin-home.component';
import { DoctorHomeComponent } from './HomePages/Doctor/doctor-home.component';
import { PatientHomeComponent } from './HomePages/Patient/patient-home.component';
import { HeaderComponent } from './Header/header.component';
import { AppointmentComponent } from './Appointment/appointment.component';
import { ProfileComponent } from './Users/Profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    DoctorHomeComponent,
    PatientHomeComponent,
    HeaderComponent,
    AppointmentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
