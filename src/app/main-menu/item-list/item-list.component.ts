import { Component, OnInit } from '@angular/core';
import {MenuItemService} from '../menu-item.service';
import {Recipe} from '../../recipes/recipe.model';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../../shared/menuItem.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  subscription: Subscription;
  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.items = this.menuItemService.getItemss();
  }

}
