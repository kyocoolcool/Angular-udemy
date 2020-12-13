import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test', 'https://fitfoodiefinds.com/wp-content/uploads/2015/10/baked-oatmeal-recipes.jpg'),
    new Recipe('Good test Recipe', 'Second recipe', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
