import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Chart1Component } from '../dashboard/components/chart/chart.component';
import { Chart2Component } from '../dashboard/components/chart2/chart2.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    DashboardComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgApexchartsModule
  ]
})
export class LayoutModule { }
