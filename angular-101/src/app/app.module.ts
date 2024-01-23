import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFundamentalsModule } from 'src/angular-fundamentals/angular-fundamentals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFundamentalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
