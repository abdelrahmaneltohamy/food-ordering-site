import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {CartService} from '../cart.service';
import {CartItemModel} from '../../shared/cartItem.model';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) cartForm: NgForm;
  subscription: Subscription;
  editMode = false;
  name: string = null;
  price: number = null;
  amount: number = null;
  editedItemIndex: number;
  editedItem: CartItemModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.cartService.getCartItem(index);
          this.name = this.editedItem.name;
          this.price = this.editedItem.price;
          this.amount = this.editedItem.amount;
          this.price = this.editedItem.price * this.amount;
          this.cartForm.setValue({
            amount: this.editedItem.amount,
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const editedCart = new CartItemModel(this.cartService.getCartItem(this.editedItemIndex).name,
      this.cartService.getCartItem(this.editedItemIndex).price, value.amount);
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.cartService.updateCartItem(this.editedItemIndex, editedCart);
    } else {
      this.cartService.addCartItem(editedCart);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.cartForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.cartService.deleteCartItem(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
