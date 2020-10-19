import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../shared/menuItem.model';

@Component({
  selector: 'app-an-item',
  templateUrl: './an-item.component.html',
  styleUrls: ['./an-item.component.css']
})
export class AnItemComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
