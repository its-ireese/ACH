import { HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { user } from '../user.model';
import { UserService } from '../user.service';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let currentUser: user;
  let updatedUser: user;
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    currentUser = {
      id: 6,
        screenName: "bobbyv",
        userType: "employee",
        homeState: "NY",
        homeTown: "Far Rockaway",
        address: "145 W State",
        email: "bobbyv@revature.net",
        password: "areacodes"
    };

    updatedUser = {
      id: 6,
        screenName: "bobbyv",
        userType: "employee",
        homeState: "NY",
        homeTown: "Far Rockaway",
        address: "145 New Haven",
        email: "bobbyv@revature.net",
        password: "areacodes"
    };
  });
 
  // it('Update user info', () => {
  //   service.updateUser(currentUser).subscribe(
  //     emps => expect(emps).toEqual(updatedUser, 'should return updated info'), fail
  //   );
  //   const req = httpTestingController.match(service.baseUrl + "/" + updatedUser.id);
  //   expect(req[0].request.method).toEqual('PUT');
  //   currentUser = updatedUser;    
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
