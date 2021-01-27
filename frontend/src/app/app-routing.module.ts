import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KhoComponent } from './kho/kho.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kho', component: KhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
