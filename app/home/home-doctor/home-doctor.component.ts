import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getUserInfo(){
    this.router.navigate(['user-details']);
  }
  getManagerRequest(){
    this.router.navigate(['request-manage']);
  
}

}
