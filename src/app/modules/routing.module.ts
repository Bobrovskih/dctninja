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
const useHash = true;

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash })],
  exports: [RouterModule]
})
export class RoutingModule { }
