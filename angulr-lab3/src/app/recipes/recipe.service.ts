import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../share/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg', [
        new Ingredient('Meet', 2),
        new Ingredient('Wins', 1),
      ]),
    new Recipe('Good test Recipe', 'Second recipe',
      'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg', [
        new Ingredient('Meet', 1),
        new Ingredient('Cheese', 3),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShippingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
