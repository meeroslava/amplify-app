import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsMapComponent } from './hotels-map.component';

describe('HotelsMapComponent', () => {
  let component: HotelsMapComponent;
  let fixture: ComponentFixture<HotelsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
