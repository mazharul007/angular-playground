import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFundamentalsComponent } from './angular-fundamentals.component';



@NgModule({
  declarations: [AngularFundamentalsComponent],
  imports: [
    CommonModule
  ], exports: [
    AngularFundamentalsComponent
  ]
})
export class AngularFundamentalsModule { }
