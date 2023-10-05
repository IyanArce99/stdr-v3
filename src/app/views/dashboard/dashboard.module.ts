import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';
import { DashboardV4Component } from './dashboard-v4/dashboard-v4.component';
import { DashboardV5Component } from './dashboard-v5/dashboard-v5.component';

import { PointStylingChartComponent } from 'src/app/point-styling-chart/point-styling-chart.component';

import { PolarAreaChartComponent } from 'src/app/polar-area-chart/polar-area-chart.component';

import { DoughnutChartsComponent } from 'src/app/doughnut-charts/doughnut-charts.component';

import { LineChartStackedComponent } from 'src/app/line-chart-stacked/line-chart-stacked.component';

import { StackedBarChartComponent } from 'src/app/stacked-bar-chart/stacked-bar-chart.component';
 import { TableHeapmapComponent } from 'src/app/table-heapmap/table-heapmap.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    NgxDatatableModule,
    NgbModule,
    DashboardRoutingModule,
     
  ],
  declarations: [DashboadDefaultComponent, DashboardV2Component, DashboardV3Component, DashboardV4Component, DashboardV5Component,
    PointStylingChartComponent ,PolarAreaChartComponent,DoughnutChartsComponent,LineChartStackedComponent,StackedBarChartComponent,TableHeapmapComponent ]
})



export class DashboardModule { }
