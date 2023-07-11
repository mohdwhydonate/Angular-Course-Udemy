import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Section3Component } from './section3/section3.component';
import { HeaderComponent } from './section3/header/header.component';
import { RecipesComponent } from './section3/recipes/recipes.component';
import { RecipeListComponent } from './section3/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './section3/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './section3/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './section3/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './section3/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment3Component,
    Section3Component,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
