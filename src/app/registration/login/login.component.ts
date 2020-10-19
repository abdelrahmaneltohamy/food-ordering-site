import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Ingredient} from '../../shared/ingredient.model';
import {UserInfo} from '../../shared/userInfo.model';
import {RegistrationService} from '../registration.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('flog', { static: false }) slForm: NgForm;
  subscription: Subscription;
  loginMode = false;
  editedItemIndex: number;
  editedItem: UserInfo;

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationService.logoutUser();
  }
 onSubmit(form: NgForm){
   const value = form.value;
   if (!this.registrationService.checkUser( value.name, value.password)) {
     alert('username or password not correct');
     form.reset();
   }else {
     this.loginMode = true;
     this.router.navigate(['../../menu'], {relativeTo: this.route});
   }

 }
}
