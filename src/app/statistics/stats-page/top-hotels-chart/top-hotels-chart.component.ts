import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Reservation } from 'src/models';

@Component({
  selector: 'app-top-hotels-chart',
  templateUrl: './top-hotels-chart.component.html',
  styleUrls: ['./top-hotels-chart.component.scss'],
})
export class TopHotelsChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  rawData?: Reservation[];
  aggregatedDataMap = new Map();
  sortedData: { name: string; count: number }[] = [];
  labels: string[] = [];
  dataSet: number[] = [];
  constructor() {}
  public barChartType: ChartType = 'bar';

  /**logic should be moved to lambda aws
   * since Datastore doesn't support aggregations
   */
  async ngOnInit(): Promise<void> {
    this.rawData = await DataStore.query(Reservation);
    let count: number;

    this.rawData.map((res) => {
      if (res.reservationHotelId) {
        if (!this.aggregatedDataMap.get(res.Hotel?.name)) {
          this.aggregatedDataMap.set(res.Hotel?.name, 1);
        } else {
          count = this.aggregatedDataMap.get(res.Hotel?.name);
          this.aggregatedDataMap.set(res.Hotel?.name, count++);
        }
      }

      for (let [key, value] of this.aggregatedDataMap) {
        this.sortedData.push({ name: key, count: value });
      }
      this.sortedData.sort((a, b) => a.count - b.count);

      this.sortedData.forEach((hotel) => {
        this.dataSet.push(hotel.count);
        this.labels.push(hotel.name);
      });
    });
  }

  //TODO add chart
}
