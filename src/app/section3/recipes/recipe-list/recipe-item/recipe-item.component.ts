import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Recipeservicesection10Service } from '../../recipeservicesection10.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeservice: Recipeservicesection10Service) {}
  ngOnInit(): void {}

  onSelected() {
    this.recipeservice.recipeSelected.emit(this.recipe);
  }
}
