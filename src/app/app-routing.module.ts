import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordDetailsComponent } from './component/record-details.component';
import { EditViewComponent } from './view/edit-view.component';
import { MainViewComponent } from './view/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path: 'record/new',
    component: EditViewComponent
  },
  {
    path: 'record/:id',
    component: RecordDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
