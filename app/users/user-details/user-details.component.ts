import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId: number=0;
  userLevel: string="";
  editFlag=false;

  errorMsg = "";

  currentUser: user = {
    id: 0,
    screenName: "",
    userType: "",
    homeState: "",
    homeTown: "",
    email: "",
    password: "",
    address: "",
  }

  editUser: user = {
    id: 0,
    screenName: "",
    userType: "",
    homeState: "",
    homeTown: "",
    email: "",
    password: "",
    address: "",
  }

  constructor(private userService: UserService) {
    this.getuserInfo();
  }

  ngOnInit(): void {
  }  

  getuserInfo() {
    this.userService.getUserInfo(Number(sessionStorage.getItem("userId"))).subscribe(
      (response) => {
        this.currentUser = response;
        this.editUser.id = response.id;
        this.editUser.email = response.email;
        this.editUser.password = response.password;
        this.editUser.userType = response.userType
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.errorMsg = "ERROR! GET USER INFO";
      }
    );
  }

  editStorage: user = {
    id: 0,
    screenName: "",
    userType: "",
    homeState: "",
    homeTown: "",
    address: "",
    email: "",
    password: ""
  }

  editUserInfo() {
    this.userService.updateUser(this.editUser).subscribe(
      (response) => {
        console.log(response);
        this.getuserInfo();
      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleEdit() {
    if(this.editFlag) this.editFlag=false;
    else this.editFlag=true;
  }

}
