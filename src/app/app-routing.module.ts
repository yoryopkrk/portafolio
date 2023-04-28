import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LayoutComponent } from './main/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule)
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('./main/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [ AuthGuard ]
  },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./main/contact/contact.module').then((m) => m.ContactModule),
  //   canActivate: [ AuthGuard ]
  // },
  { path: '**', redirectTo: 'not-found' },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
