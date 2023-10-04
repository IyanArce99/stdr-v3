import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointStylingChartComponent } from './point-styling-chart.component';

describe('PointStylingChartComponent', () => {
  let component: PointStylingChartComponent;
  let fixture: ComponentFixture<PointStylingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointStylingChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointStylingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
