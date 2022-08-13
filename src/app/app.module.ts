import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HotelsModule } from './hotels/hotels.module';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SearchModule } from './search/search.module';
import { HotelsMapComponent } from './hotels-map/hotels-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { StatisticsModule } from './statistics/statistics.module';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent, NavMenuComponent, HotelsMapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HotelsModule,
    AmplifyAuthenticatorModule,
    RoomsModule,
    ReservationsModule,
    SearchModule,
    GoogleMapsModule,
    StatisticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
