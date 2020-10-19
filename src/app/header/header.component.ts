import {Component, OnDestroy, OnInit} from '@angular/core';
import {RegistrationService} from '../registration/registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  Islogged = false;
  constructor(private registrationService: RegistrationService) {
  }
  ngOnInit() {
    this.registrationService.userlogged.subscribe((islogged) =>{
      this.Islogged = islogged;
    });
  }
  ngOnDestroy() {
    this.registrationService.userlogged.unsubscribe();
  }
}
