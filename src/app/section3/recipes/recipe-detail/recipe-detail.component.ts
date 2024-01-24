import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared /ingredient.model';
import { Recipe } from '../recipe.model';
import { Recipeservicesection10Service } from '../recipeservicesection10.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeser: Recipeservicesection10Service) {}
  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeser.addIngredientToShopping(this.recipe.ingredients);
    console.log(
      'getting inreditent',
      this.recipeser.addIngredientToShopping(this.recipe.ingredients)
    );
  }
}
