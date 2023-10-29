import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';
import { DashboardV4Component } from './dashboard-v4/dashboard-v4.component';
import { DashboardV5Component } from './dashboard-v5/dashboard-v5.component';
import { MonitoringComponent } from '../monitoring/monitoring.component';
import { ScanningComponent } from '../scanning/scanning.component';
import { RulesComponent } from '../rules/rules.component';

const routes: Routes = [
  {
    path: 'v5',
    component: DashboardV5Component
  },
  {
    path: 'monitoring',
    component: MonitoringComponent
  },
  {
    path: 'scanning',
    component: ScanningComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
