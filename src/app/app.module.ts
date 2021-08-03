import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { CovidstatsService } from './services/covidstats.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryComponent } from './components/summary/summary.component';
import { StockDashboardComponent } from './components/dashboard/dashboard.component';
import { CovidstatComponent } from './components/covidstat/covidstat.component';
import { CovidmetricComponent } from './components/covidmetric/covidmetric.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricComponent,
    SummaryComponent,
    StockDashboardComponent,
    CovidstatComponent,
    CovidmetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [StocksService, CovidstatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
