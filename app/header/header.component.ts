import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  clearLog() {
    sessionStorage.removeItem("userLevel");
  }

  isPatient() {
    let level= sessionStorage.getItem("userLevel");
    return (level=="employee");
  }

  isDoctor() {
    let level= sessionStorage.getItem("userLevel");
    return (level=="manager");
  }

  isAdmin() {
    let level= sessionStorage.getItem("userLevel");
    return (level=="manager");
  }

  isLoggedIn(){
    return this.authService.isLoggedIn;
  }
  

}
