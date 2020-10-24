import { TestBed, async, inject } from '@angular/core/testing';
import {SignupComponent} from './signup.component';
import {RegistrationService} from '../registration.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      providers: [ShoppingListService, RegistrationService],
    });
    TestBed.compileComponents();
  });

  it('should create the sign up app', async(() => {
    TestBed.inject(RegistrationService);
    const fixture = TestBed.createComponent(SignupComponent);
    //let registrationsService = fixture.debugElement.injector.get(RegistrationService);
    const app = fixture.debugElement.componentInstance;

    //fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

 /* it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should have a button that say login', async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled());
    fixture.detectChanges();
    expect(compiled.querySelector('button').textContent).toContain('login');
  //  expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
  */
});
