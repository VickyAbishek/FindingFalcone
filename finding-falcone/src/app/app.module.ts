import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

import { PlanetService } from './services/planet.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from './services/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    PlanetService,
    ApiService,
    HttpClientModule,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
