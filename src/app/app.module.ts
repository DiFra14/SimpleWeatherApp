import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ForecastComponent } from './components/forecast/forecast.component'


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchbarComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
