import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    App.addListener('backButton', () => {
      if (window.location.pathname == '/') {
        App.exitApp();
      }
      else {
        window.history.back();
      }
    });
  }
}
