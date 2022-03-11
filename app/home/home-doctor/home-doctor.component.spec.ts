import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeManagerComponent } from './home-doctor.component';

describe('HomeManagerComponent', () => {
  let component: HomeManagerComponent;
  let fixture: ComponentFixture<HomeManagerComponent>;
  let debug: DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManagerComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;

    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  // it('should have a welcome message', () => {
  //   expect(component.getUserInfo);
  // });

  // it('testing html', () => {
  //   const data = fixture.nativeElement;
  //   expect(data.querySelector(".some")).withContext('user');
  // });

  // it('Content of H2 tag', () => {
  //   expect(debug.query(By.css('h2')).nativeElement.innerText).toContain('Hello');
  // });
});
