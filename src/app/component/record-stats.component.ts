import { Component, OnInit } from '@angular/core';
import Record, { IncomeType } from 'src/app/model/Record';
import { RecordService } from 'src/app/service/record.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-record-stats',
  template: `
    <mat-list>
      <mat-list-item>Income: {{totalIncome}} €</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Expenses: {{totalExpenses}} €</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Net: {{totalIncome - totalExpenses}} €</mat-list-item>
    </mat-list> 
  `,
  styles: []
})
export class RecordStatsComponent implements OnInit {

  records: Record[] = [];
  totalIncome: number = 0;
  totalExpenses: number = 0;

  constructor(
    private recordService: RecordService,
  ) { }

  ngOnInit(): void {
    this.records = this.recordService.getRecords();
    this.records.forEach((record) => {
      if (record.type === IncomeType.INCOME) {
        this.totalIncome += record.amount;
      }
      else {
        this.totalExpenses += record.amount;
      }
    });
  }

}
