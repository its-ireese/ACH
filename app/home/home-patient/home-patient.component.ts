import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getUserInfo(){
    this.router.navigate(['user-details']);
  }
  getUserRequest(){
    this.router.navigate(['request-pending']);
  }


}
