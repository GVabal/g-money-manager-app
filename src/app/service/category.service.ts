import { Injectable } from '@angular/core';
import Category from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories: Category[] = [
    {id: 1, name: 'attach_money'},
    {id: 2, name: 'fastfood'},
    {id: 3, name: 'home'},
  ];

  constructor() { }

  getCategoryById(id: number): Category {
    return this._categories.find(category => category.id == id) as Category;
  }
}
