import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soma } from './soma/soma';

const routes: Routes = [
  {path: 'soma', component: Soma}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
