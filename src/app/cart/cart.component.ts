import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CartItemModel} from '../shared/cartItem.model';
import {CartService} from './cart.service';
import {RegistrationService} from '../registration/registration.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: CartItemModel[];
  private subscription: Subscription;
  private subscriptionToLogin: Subscription;
  userIsLogged: boolean = false;
  constructor(private cartService: CartService, private userService: RegistrationService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.userIsLogged = this.userService.getUserStatus();
    this.subscription = this.cartService.cartChanged
      .subscribe(
        (cartItems: CartItemModel[]) => {
          this.cartItems = cartItems;
        }
      );
  }

  onEditItem(index: number) {
    this.cartService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onCheckOut() {
    let totalPrice = 0;
    for ( const item of this.cartItems) {
      totalPrice += item.amount * item.price;
    }
    alert('The total price is ' + totalPrice);
  }

}
