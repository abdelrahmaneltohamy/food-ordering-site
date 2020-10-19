import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Item} from '../shared/menuItem.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {CartService} from '../cart/cart.service';
import {CartItemModel} from '../shared/cartItem.model';

@Injectable()

export class MenuItemService {
  itemsChanged = new Subject<Item[]>();
  constructor(private slService: ShoppingListService, private cartService: CartService) {}

  private items: Item[] = [
    new Item(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      60,
      1,
      [
        new Ingredient('Schnitzel', 1),
        new Ingredient('French Fries', 1)
      ]),
    new Item('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      65,
      1,
      [
        new Ingredient('Burger', 1),
      ]),
    new Item('tasty pizza',
      'best pizza in town!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Garlic_Fingers.jpg/800px-Garlic_Fingers.jpg',
      70,
      1,
      [
        new Ingredient('pizza', 1)
      ]),
    new Item('Big Fat Burger Combo',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      75,
      1,
      [
        new Ingredient('Burger', 1),
        new Ingredient('French Fries', 1),
        new Ingredient('Soft drink', 1)
      ]),

  ];


  getItemss() {
    return this.items.slice();
  }

  getItems(index: number) {
    return this.items[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addItemsToCart( cartItem: CartItemModel) {
    this.cartService.addCartItem(cartItem);
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}
