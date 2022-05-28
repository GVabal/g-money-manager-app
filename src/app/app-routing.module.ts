import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordDetailsViewComponent } from './view/record-details-view.component';
import { CategoryManagmentViewComponent } from './view/category-managment-view.component';
import { EditRecordViewComponent } from './view/edit-record-view.component';
import { MainViewComponent } from './view/main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path: 'record/new',
    component: EditRecordViewComponent
  },
  {
    path: 'record/:id',
    component: RecordDetailsViewComponent
  },
  {
    path: 'category',
    component: CategoryManagmentViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
