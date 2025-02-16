import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'pending',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      filter: 'pending',
    },
  },
  {
    path: 'completed',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      filter: 'completed',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
