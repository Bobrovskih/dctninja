import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ApiComponent,
  DocComponent,
  HomeComponent,
} from '../pages';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'doc',
    component: DocComponent,
  }, {
    path: 'api',
    component: ApiComponent,
  }, {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
