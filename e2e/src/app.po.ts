import { browser, by, element } from 'protractor';

export class AppPage {
  // routing section
  navigateTo() {
    return browser.get('/');
  }
  navigateToLogin() {
    return browser.get('/registration/login');
  }
  navigateToSignup() {
    return browser.get('/registration/signup');
  }
  navigateToCart() {
    return browser.get('/cart');
  }
  getCurrentUrl() {
    return  browser.getCurrentUrl();
  }

  // header section
  getnavBarCart() {
    return element(by.xpath('/html/body/app-root/app-header/nav/div/div[2]/ul[1]/li[2]/a'));
  }

  // login section
  writeAUserName(username: string) {
    element(by.id('name')).sendKeys(username);
  }
  witeAPassword(password: string) {
    element(by.id('password')).sendKeys(password);
  }
  getLoginButton() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-registration/div/div/app-login/form/div[2]/button'));
  }

  // sign up section
  getSignUpButton() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-registration/div/div/app-signup/form/div[2]/button'));
  }
  signupwriteAnEmail(email: string) {
    element(by.id('email')).sendKeys(email);
  }
  signupwriteAnAge(age: string) {
    element(by.id('age')).sendKeys(age);
  }
  signupwriteAUserName(username: string) {
    element(by.id('username')).sendKeys(username);
  }
  signupwiteAPassword(password: string) {
    element(by.id('password')).sendKeys(password);
  }
  signupwriteAConfirmedPassword(confirmpassword: string) {
    element(by.id('confirmpassword')).sendKeys(confirmpassword);
  }
  getEmailValidationMessage() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-registration/div/div/app-signup/form/div[1]/div[1]/p'));
  }
  getAgeValidationMessage() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-registration/div/div/app-signup/form/div[1]/div[2]/p'));
  }
  getConfirmPasswordValidationMessage() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-registration/div/div/app-signup/form/div[1]/div[5]/p'));
  }

  // menu section
  getSecondItemMenu() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-main-menu/div/div[1]/app-item-list/div/div/app-an-item[2]/a'));
  }
  getFirstItemInMenu() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-main-menu/div/div[1]/app-item-list/div/div/app-an-item[1]/a'));
  }
  getAddToCartButton() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-main-menu/div/div[2]/app-item-details/div[3]/div/div/a/button'));
  }

  // cart section
  getCheckoutButton() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-cart/div/div/button'));
  }
  getUpdateCartButton() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-cart/div/div/app-edit-cart/div/div/form/div[2]/div/button'));
  }
  getFirstItemInCart() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-cart/div/div/ul/a/div/div[1]/p'));
  }
  getItemTextInCart() {
    return element(by.xpath('/html/body/app-root/div/div/div/app-cart/div/div/ul/a/div/div[1]/p')).getText();
  }
  getUsernameText() {
    return element(by.id('name')).getText();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

}
