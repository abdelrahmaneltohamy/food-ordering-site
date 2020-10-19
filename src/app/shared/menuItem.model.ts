import {Ingredient} from './ingredient.model';

export class Item {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  public ingredients: Ingredient[];
  public amount: number;
  constructor(name: string, desc: string, imagePath: string, price: number, amount: number, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.price = price;
    this.amount = amount;
  }
}
