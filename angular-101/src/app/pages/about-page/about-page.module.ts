import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { MenuModule } from 'src/shared/menu/menu.module';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    MenuModule
  ]
})
export class AboutPageModule { }
