import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LayoutComponent } from './layout/layout.component';
import { NavbarmainComponent } from './layout/components/navbarmain/navbarmain.component';
import { SidebarmainComponent } from './layout/components/sidebarmain/sidebarmain.component';
import { FootermainComponent } from './layout/components/footermain/footermain.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarmainComponent,
    SidebarmainComponent,
    FootermainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgApexchartsModule
  ]
})
export class MainModule { }
