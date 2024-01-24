import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Recipeservicesection10Service } from '../recipeservicesection10.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[];
  constructor(private recipeservice: Recipeservicesection10Service) {}
  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }
}
