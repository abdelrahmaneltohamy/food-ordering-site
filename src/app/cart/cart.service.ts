import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';
import {CartItemModel} from '../shared/cartItem.model';
import {Injectable} from '@angular/core';
@Injectable()
export class CartService {
  cartChanged = new Subject<CartItemModel[]>(); // c
  startedEditing = new Subject<number>();
  private cartItems: CartItemModel[] = [

  ];

  getCartItems() {
    return this.cartItems.slice();
  }

  getCartItem(index: number) {
    return this.cartItems[index];
  }

  addCartItem(cartItem: CartItemModel) {
    this.cartItems.push(cartItem);
    this.cartChanged.next(this.cartItems.slice());
  }

  addCartItems(cartItems: CartItemModel[]) {
    this.cartItems.push(...cartItems);
    this.cartChanged.next(this.cartItems.slice());
  }

  updateCartItem(index: number, newCartItem: CartItemModel) {
    this.cartItems[index] = newCartItem;
    this.cartChanged.next(this.cartItems.slice());
  }

  deleteCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartChanged.next(this.cartItems.slice());
  }
}
