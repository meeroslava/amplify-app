import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHotelsChartComponent } from './top-hotels-chart.component';

describe('TopHotelsChartComponent', () => {
  let component: TopHotelsChartComponent;
  let fixture: ComponentFixture<TopHotelsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHotelsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHotelsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
