import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarmainComponent } from '../components/navbarmain/navbarmain.component';
import { SidebarmainComponent } from '../components/sidebarmain/sidebarmain.component';
import { FootermainComponent } from '../components/footermain/footermain.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { Chart1Component } from '../components/chart/chart.component';
import { Chart2Component } from '../components/chart2/chart2.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarmainComponent,
    SidebarmainComponent,
    FootermainComponent,
    ContactoComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
