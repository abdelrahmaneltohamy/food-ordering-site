import { AppPage } from './app.po';
import {browser, element, protractor} from 'protractor';
import {ɵdetectChanges} from '@angular/core';

describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
  it('should sign in with an existing user', () => {
    page.navigateToLogin();
    page.writeAUserName('maun');
    page.witeAPassword('maun1994');
    // browser.pause(4200);
    page.getLoginButton().click();
    expect(page.getFirstItemInMenu().getText()).toContain('Tasty');
  });

  it('shouldn\'t sign in with wrong username or password', () => {
    page.navigateToLogin();
    page.writeAUserName('maun');
    page.witeAPassword('maun994');
    page.getLoginButton().click();
    const EC = protractor.ExpectedConditions;
    browser.switchTo().alert().accept();
    expect(page.getLoginButton().isEnabled()).toBe(false);
  });

  it('should add an item to cart when needed',() => {
    page.navigateTo();
    page.getSecondItemMenu().click();
    page.getAddToCartButton().click();
    page.getnavBarCart().click();
    // browser.pause(4200);
    expect(page.getItemTextInCart()).toContain('Fat Burger');
  });

  it('shouldn\'t check out if you are not signed in ', () => {
    page.navigateToCart();
    expect(page.getCheckoutButton().isEnabled()).toBe(false);
  });
  it('should return menu as current url', () => {
    page.navigateTo();
    expect(page.getCurrentUrl()).toContain('menu');
  });
  it('should update cart if an item is selected', () => {
    page.navigateTo();
    page.getSecondItemMenu().click();
    page.getAddToCartButton().click();
    page.getnavBarCart().click();
    page.getFirstItemInCart().click();
    expect(page.getUpdateCartButton().isEnabled()).toBe(true);
  });
  it('shouldn\'t update cart if no item is selected', () => {
    page.navigateTo();
    page.getSecondItemMenu().click();
    page.getAddToCartButton().click();
    page.getnavBarCart().click();
    expect(page.getUpdateCartButton().isEnabled()).toBe(false);
  });
 it('should calculate the checkout given that user is logged in and at least one item is in cart', () => {
   page.navigateToLogin();
   page.writeAUserName('maun');
   page.witeAPassword('maun1994');
   page.getLoginButton().click();
   page.getSecondItemMenu().click();
   page.getAddToCartButton().click();
   page.getnavBarCart().click();
//   browser.pause(4200);
   expect(page.getCheckoutButton().isEnabled()).toBe(true);

 });
 it('shouldn\'t sign up if one or more input field is empty', () => {
    page.navigateToSignup();
    expect(page.getSignUpButton().isEnabled()).toBe(false);
 });
 it('should sign up given that all input fields are poplulated with their rightful patterns', () => {
   page.navigateToSignup();
   page.signupwriteAnEmail('maun@maun.maun');
   page.signupwriteAnAge('21');
   page.signupwriteAUserName('maun');
   page.signupwiteAPassword('tobeornottobe');
   page.signupwriteAConfirmedPassword('tobeornottobe');
   expect(page.getSignUpButton().isEnabled()).toBe(true);
 });
 it('should display a paragraph indicating that the email pattern is wrong if it was given a wrong email pattern',
   () => {
    page.navigateToSignup();
    page.signupwriteAnEmail('maun');
    expect(page.getEmailValidationMessage().getText()).toContain('email must be of valid pattern');
 });
  it('should display a paragraph indicating that the age pattern is wrong if it was given a wrong age pattern',
    () => {
      page.navigateToSignup();
      page.signupwriteAnAge('0');
      expect(page.getAgeValidationMessage().getText()).toContain('age must be greater than 0');
    });
  it('should display a paragraph indicating that the password don\'t match\ ' +
    'if the password field and confirm password field doesn\'t match',
    () => {
      page.navigateToSignup();
      page.signupwiteAPassword('ahmed');
      page.signupwriteAConfirmedPassword('ahmd');
      expect(page.getConfirmPasswordValidationMessage().getText()).toContain('password doesn\'t match');
    });
});
