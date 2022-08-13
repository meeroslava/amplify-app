import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsMapComponent } from './hotels-map/hotels-map.component';
import { NewHotelFormComponent } from './hotels/new-hotel-form/new-hotel-form.component';
import { NewReservationComponent } from './reservations/new-reservation/new-reservation.component';
import { NewRoomComponent } from './rooms/new-room/new-room.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { StatsPageComponent } from './statistics/stats-page/stats-page.component';

const routes: Routes = [
  { path: '', component: HotelsMapComponent },
  { path: 'add-hotel', component: NewHotelFormComponent },
  { path: 'add-room', component: NewRoomComponent },
  { path: 'add-reservation', component: NewReservationComponent },
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
