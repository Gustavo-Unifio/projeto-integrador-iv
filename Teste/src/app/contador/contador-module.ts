import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing-module';
import { Soma } from './soma/soma';


@NgModule({
  declarations: [
    Soma
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
