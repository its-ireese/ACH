import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { user } from '../user.model';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from '../user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let service: UserService;
  let userLogin: user;
  let addedUserModel: user;
  let expectedUserModel: user[];
  let httpTestingController: HttpTestingController;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  //    userLogin = [
  //      {
  //        id: 4,
  //        screenName: "bobbyv",
  //        userType: "employee",
  //        homeState: "NY",
  //        homeTown: "Far Rockaway",
  //        address: "145 W State",
  //        email: "bobbyv@revature.net",
  //        password: "areacodes"
  //      }
  //    ]as user[];

  //   expectedUserModel = [
  //     { id: 6,
  //       screenName: "bobbyv",
  //       userType: "employee",
  //       homeState: "NY",
  //       homeTown: "Far Rockaway",
  //       address: "145 W State",
  //       email: "bobbyv@revature.net",
  //       password: "areacodes"
  //     }
  //   ] as user[];
   });

  // it('should POST reimbursement by calling once', () => {
  //   service.getLoggedIn(expectedUserModel, expectedUserModel).subscribe(
  //     emps => expect(emps).toContain(expectedUserModel, 'should add reimbursements'),
  //     fail
  //   );
  //   const req = httpTestingController.match(service.getUserInfo);
  //   expect(req[0].request.method).toEqual('POST');
  //   expectedUserModel.push(addedUserModel);
  //   req[0].flush(expectedUserModel); 
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector(".content button")?.textContent).toContain("Login");
  // });

});
