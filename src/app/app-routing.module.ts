import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { StockdetailComponent } from './stockdetail/stockdetail.component';

const route:Routes = [
      { path: 'dashboard' , component: DashboardComponent},
      { path: 'manage', component: ManageComponent},
      { path: 'stockdetail', component: StockdetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
        RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
