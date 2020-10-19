import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../../shared/menuItem.model';
import {MenuItemService} from '../menu-item.service';
import {NavigationEnd, Params, Router} from '@angular/router';
import {urlJoin} from '@angular-devkit/build-angular/src/utils';
import { filter } from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {CartItemModel} from '../../shared/cartItem.model';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  routingSubscription: Subscription;
  item: Item ; // = this.menuitemService.getItems(0);
  id: number;
  constructor(private menuitemService: MenuItemService, private route: Router) {
    this.id = +this.route.url.slice(6, 7);
    this.item = this.menuitemService.getItems(this.id);
  }

  ngOnInit(): void {
    this.routingSubscription = this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.id = +event.urlAfterRedirects.slice(6, 7);
      this.item = this.menuitemService.getItems(this.id);
    });
  }

  onAddToShoppingList() {
    //this.menuitemService.addIngredientsToShoppingList(this.item.ingredients);
    const cartItem = new CartItemModel(this.item.name, this.item.price, this.item.amount)
    this.menuitemService.addItemsToCart(cartItem);
  }
  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
