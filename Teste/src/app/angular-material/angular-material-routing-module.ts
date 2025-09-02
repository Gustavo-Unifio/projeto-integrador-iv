import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMaterial } from './google-material/google-material';

const routes: Routes = [
  {path: 'toolbar', component: GoogleMaterial} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
