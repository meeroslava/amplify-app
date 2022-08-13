import { Component, OnInit } from '@angular/core';
import { DataStore, Geo } from 'aws-amplify';
import { Hotel } from 'src/models';

@Component({
  selector: 'app-hotels-map',
  templateUrl: './hotels-map.component.html',
  styleUrls: ['./hotels-map.component.scss'],
})
export class HotelsMapComponent implements OnInit {
  rawHotels?: Hotel[];
  hotelsGeo: { hotel: string; position: { lat: number; lng: number } }[] = [];
  center: { lng: number; lat: number } = {
    lat: 29.56609925010143,
    lng: 34.95237432665721,
  };

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.rawHotels = await DataStore.query(Hotel);
    this.rawHotels.map(async (hotel) => {
      let data = await Geo.searchByText(hotel.address, {
        biasPosition: [this.center.lng, this.center.lat],
      });
      let dataGeometry = data[0].geometry;

      if (dataGeometry) {
        this.hotelsGeo.push({
          hotel: hotel.name,
          position: { lng: dataGeometry.point[0], lat: dataGeometry.point[1] },
        });
      }
    });
  }
}
