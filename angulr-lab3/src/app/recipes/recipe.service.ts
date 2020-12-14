import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../share/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test',
      'https://fitfoodiefinds.com/wp-content/uploads/2015/10/baked-oatmeal-recipes.jpg', [
        new Ingredient('Meet', 2),
        new Ingredient('Wins', 1),
      ]),
    new Recipe('Good test Recipe', 'Second recipe',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg', [
        new Ingredient('Meet', 1),
        new Ingredient('Cheese', 3),
      ])
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
