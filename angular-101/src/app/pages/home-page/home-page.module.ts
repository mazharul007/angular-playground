import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { MenuModule } from 'src/shared/menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MenuModule
  ]
})
export class HomePageModule { }
