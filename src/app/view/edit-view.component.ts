import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-view',
  template: `
    <mat-toolbar color="primary">
      <mat-icon mat-list-icon routerLink="/">arrow_back</mat-icon>
    </mat-toolbar>
    <p>categories go here</p>
    <p>control go here</p>
  `,
  styles: [
  ]
})
export class EditViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
