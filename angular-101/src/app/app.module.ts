import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFundamentalsModule } from 'src/angular-fundamentals/angular-fundamentals.module';
import { MenuModule } from 'src/shared/menu/menu.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFundamentalsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
