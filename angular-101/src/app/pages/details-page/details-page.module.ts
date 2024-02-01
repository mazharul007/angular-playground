import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { MenuModule } from 'src/shared/menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailsPageRoutingModule,
    MenuModule
  ]
})
export class DetailsPageModule { }
