import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing-module';
import { GoogleMaterial } from './google-material/google-material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    GoogleMaterial
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
