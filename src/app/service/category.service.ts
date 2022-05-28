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
    {id: 4, name: 'schedule'},
    {id: 5, name: 'room'},
    {id: 6, name: 'tab'},
  ];

  constructor() { }

  getCategories(): Category[] {
    return this._categories;
  }

  getCategoryById(id: number): Category {
    return this._categories.find(category => category.id == id) as Category;
  }
}
