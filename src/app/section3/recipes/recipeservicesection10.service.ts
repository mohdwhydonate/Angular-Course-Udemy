import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared /ingredient.model';
import { ShppingListservicesection10Service } from '../shopping-list/shpping-listservicesection10.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class Recipeservicesection10Service {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      ' A Test',
      'This is desc',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      ' Another  Test',
      'This is desc',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];
  ingredients: any;
  constructor(private slservice: ShppingListservicesection10Service) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShopping(ingredients: Ingredient[]) {
    this.slservice.addIngredients(ingredients);
  }
}
