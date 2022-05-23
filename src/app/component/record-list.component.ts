import { Component, OnInit } from '@angular/core';
import Record from 'src/app/model/Record';
import { RecordService } from 'src/app/service/record.service';
import Category from '../model/Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-record-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let record of records" [routerLink]="['record', record.id]">
          <mat-icon mat-list-icon>{{findCategory(record.categoryId)}}</mat-icon>
          <div mat-line>
              <span *ngIf="record.type.valueOf() === 1">-</span> {{record.amount}} €
          </div>
          <div mat-line> {{record.timestamp | customDate}} </div>
      </mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class RecordListComponent implements OnInit {

  records: Record[] = [];

  constructor(
    private categoryService: CategoryService,
    private recordService: RecordService,
  ) { }

  ngOnInit(): void {
    this.records = this.recordService.getRecords()
                                     .sort((a, b) => b.timestamp - a.timestamp);
  }

  findCategory(id: number): Category {
    return this.categoryService.getCategoryById(id);
  }
}
