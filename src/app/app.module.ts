import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SellerComponent } from './seller/seller.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommercesService } from './services/commerces.service';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GraphPieComponent } from './graph-pie/graph-pie.component'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphBarComponent } from './graph-bar/graph-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SellerComponent,
    FooterComponent,
    HeaderComponent,
    GraphPieComponent,
    GraphBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatButtonToggleModule,
    HighchartsChartModule
  ],
  providers: [
    CommercesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
