import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from '../registration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ingredient} from '../../shared/ingredient.model';
import {UserInfo} from '../../shared/userInfo.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationService.logoutUser();
  }
  onSubmit(form: NgForm) {
    console.log(form);
    /*
    const value = form.value;
    if (!this.registrationService.checkUser( value.name, value.password)) {
      alert('username or password not correct');
      form.reset();
    }else {
      this.router.navigate(['../../'], {relativeTo: this.route});
    }
    */
    const value = form.value;
    const newUser = new UserInfo(value.username, value.password, value.email, +value.age);
    this.registrationService.addUser(newUser);
    this.router.navigate(['../../menu'], {relativeTo: this.route});

  }
  passwordMatched(form: NgForm): boolean {
    if (!(form.value.password === form.value.confirmpassword) && form.touched) {
      return true;
    } else {
      return false;
    }
  }
  ageCheck(form: NgForm): boolean {
    if (!(form.value.age > 0) && form.controls.age.dirty) {
      return true;
    } else {
      return false;
    }
  }
  emailCheck(form: NgForm): boolean {
    if ( !form.controls.email.valid && form.controls.email.dirty) {
      return true;
    } else {
      return   false;
    }
  }

}
