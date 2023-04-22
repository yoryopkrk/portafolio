import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { AuthGuard } from '@core/guardas/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'contacto', component: ContactoComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
