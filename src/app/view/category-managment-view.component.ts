import { Component, OnInit } from '@angular/core';
import Category from '../model/Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-managment-view',
  template: `
    <mat-grid-list cols="4" rowHeight="1:1">
      <mat-grid-tile *ngFor="let category of categories">
      <mat-icon>{{category.name}}</mat-icon>
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-icon>add_circle</mat-icon>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
  ]
})
export class CategoryManagmentViewComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

}
