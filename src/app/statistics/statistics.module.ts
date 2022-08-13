import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { TopHotelsChartComponent } from './stats-page/top-hotels-chart/top-hotels-chart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [StatsPageComponent, TopHotelsChartComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule, NgChartsModule],
})
export class StatisticsModule {}
