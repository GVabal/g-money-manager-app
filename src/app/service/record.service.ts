import { Injectable } from '@angular/core';
import Record, { IncomeType } from '../model/Record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private _records: Record[] = [
    {id: 1, timestamp: Date.now(), type: IncomeType.INCOME, categoryId: 1, amount: 1400.00},
    {id: 2, timestamp: Date.now() + 1000, type: IncomeType.EXPENSES, categoryId: 2, amount: 2.99},
    {id: 3, timestamp: Date.now() + 2000, type: IncomeType.EXPENSES, categoryId: 2, amount: 4.45},
    {id: 4, timestamp: Date.now() + 3000, type: IncomeType.EXPENSES, categoryId: 2, amount: 2.19},
    {id: 5, timestamp: Date.now() + 4000, type: IncomeType.EXPENSES, categoryId: 3, amount: 450.00, comment: 'Rent'},
  ];

  constructor() { }

  getRecords(): Record[] {
    return this._records;
  };

  getRecordById(id: number): Record {
    return this._records.find(record => record.id == id) as Record;
  }
}
