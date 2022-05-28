import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-record-view',
  template: `
    <app-toolbar></app-toolbar>
    <p>categories go here</p>
    <p>control go here</p>
  `,
  styles: [
  ]
})
export class EditRecordViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
