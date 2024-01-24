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
import { Section5Component } from './section5/section5.component';
import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { EvenComponent } from './assignment4/even/even.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { Section7Component } from './section7/section7.component';
import { BasicHighlightDirective } from './section7/basic/basic-highlight.directive';
import { UnlessDirective } from './section7/unless.directive';
import { DropdownDirective } from './section3/shared /dropdown.directive';
import { Section9Component } from './section9/section9.component';
import { AccountComponent } from './section9/account/account.component';
import { NewAccountComponent } from './section9/new-account/new-account.component';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';

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
    ShoppingEditComponent,
    Section5Component,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    Section7Component,
    BasicHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    Section9Component,
    AccountComponent,
    NewAccountComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
