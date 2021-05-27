import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchtestComponent } from './fetchtest/fetchtest.component';
import { AppService } from "./app.service";
import { Fetchtest2Component } from './fetchtest2/fetchtest2.component'

@NgModule({
  declarations: [
    AppComponent,
    FetchtestComponent,
    Fetchtest2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
