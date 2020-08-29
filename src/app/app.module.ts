import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { ParserService } from './services/parser.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
