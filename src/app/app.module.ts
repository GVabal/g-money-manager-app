import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './view/main-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecordListComponent } from './component/record-list.component';
import { RecordStatsComponent } from './component/record-stats.component';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import { CustomDatePipe } from './pipe/custom-date.pipe';
import { RecordDetailsComponent } from './component/record-details.component'; 
import { MatButtonModule } from '@angular/material/button';
import { EditViewComponent } from './view/edit-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    RecordListComponent,
    RecordStatsComponent,
    CustomDatePipe,
    RecordDetailsComponent,
    EditViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
