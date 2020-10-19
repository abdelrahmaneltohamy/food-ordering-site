import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './registration/login/login.component';
import {SignupComponent} from './registration/signup/signup.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {ItemListComponent} from './main-menu/item-list/item-list.component';
import {ItemDetailsComponent} from './main-menu/item-details/item-details.component';
import {CartComponent} from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'menu', component: MainMenuComponent, children: [
      {path: ':name', component: ItemDetailsComponent},
      { path: '', component: ItemDetailsComponent },
    ]
  },
  { path: 'registration', component: RegistrationComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
    ]},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
