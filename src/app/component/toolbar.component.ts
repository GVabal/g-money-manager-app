import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <mat-icon mat-list-icon routerLink="/category">settings</mat-icon>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
