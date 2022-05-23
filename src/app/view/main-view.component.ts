import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-view',
  template: `
    <mat-toolbar color="primary"></mat-toolbar>
    <app-record-stats></app-record-stats>
    <mat-divider></mat-divider>
    <app-record-list></app-record-list>
    <button mat-fab color="primary" (click)="addRecord()">
      <mat-icon click>add</mat-icon>
    </button>
  `,
  styles: []
})
export class MainViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addRecord(): void {
    this.router.navigate(['record', 'new'])
  }
}
