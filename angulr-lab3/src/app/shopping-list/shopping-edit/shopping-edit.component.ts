import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../share/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: []
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmount = this.amountInputRef.nativeElement.value;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
