import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import {  ReactiveFormsModule } from '@angular/forms';


import { AchiveResultsComponent } from './achive-results/achive-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingHomeComponent,
    AchiveResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
