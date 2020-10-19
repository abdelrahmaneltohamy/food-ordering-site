import {Injectable} from '@angular/core';
import {UserInfo} from '../shared/userInfo.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RegistrationService {
  usersChanged = new Subject<UserInfo[]>();
  userlogged = new Subject<boolean>();

  userloggedCart: boolean;
  currentUser: UserInfo = new UserInfo(null, null, null, null);
  private registuredUsers: UserInfo[] = [
    new UserInfo('maun', 'maun1994', 'maun@maun.com', 25 ),
    new UserInfo('moda', 'moda2001', 'moda@moda.com', 19),
  ];
  constructor(private slService: ShoppingListService) {}
  getUsers() {
    return this.registuredUsers.slice();
  }

  getUser(index: number) {
    return this.registuredUsers[index];
  }
 // edit below
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addUser(user: UserInfo) {
    this.registuredUsers.push(user);
    this.userlogged.next(true);
    this.userloggedCart = true;
    this.currentUser = user;
   // this.usersChanged.next(this.registuredUsers.slice());
  }
  checkUser(name: string, password: string): boolean {

    for (let i = 0; i < (this.registuredUsers).length; i++) {
      console.log(i + this.registuredUsers[i].name);
      if ( this.registuredUsers[i].name === name && this.registuredUsers[i].password === password ) {
        this.currentUser = this.registuredUsers[i];
        this.userlogged.next(true);
        this.userloggedCart = true;
        return true;
      } else {
      }
    }
  }
  logoutUser() {
    this.userlogged.next(false);
    this.userloggedCart = false;
  }
  getUserStatus(): boolean {
    return this.userloggedCart;
  }

}
