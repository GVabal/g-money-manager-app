import { Component, OnInit } from '@angular/core';
import Record from 'src/app/model/Record';
import { RecordService } from 'src/app/service/record.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-record-details-view',
  template: `
    <mat-list role="list">
        <mat-list-item role="listitem">
            <mat-icon mat-list-icon>{{categoryName(record.categoryId)}}</mat-icon> {{categoryName(record.categoryId)}}
        </mat-list-item>
        <mat-list-item role="listitem">{{record.timestamp | customDate}}</mat-list-item>
        <mat-list-item role="listitem">{{record.amount}} €</mat-list-item>
        <mat-list-item role="listitem">{{record.comment}}</mat-list-item>
    </mat-list>
    <button mat-fab color="primary">
        <mat-icon>edit</mat-icon>
    </button>
  `,
  styles: [
  ]
})
export class RecordDetailsViewComponent implements OnInit {

  record!: Record;

  constructor(
    private categoryService: CategoryService,
    private recordService: RecordService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.record = this.recordService.getRecordById(this.route.snapshot.params['id']) as Record;
  }

  categoryName(id: number): string {
    return this.categoryService.getCategoryById(id).name;
  }
}
