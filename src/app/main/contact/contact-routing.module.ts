import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactComponent } from './list-contact/list-contact.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: 'list-contact', component: ListContactComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
