import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarmainComponent } from '../components/navbarmain/navbarmain.component';
import { SidebarmainComponent } from '../components/sidebarmain/sidebarmain.component';
import { FootermainComponent } from '../components/footermain/footermain.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ChartComponent } from '../components/chart/chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarmainComponent,
    SidebarmainComponent,
    FootermainComponent,
    ContactoComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
