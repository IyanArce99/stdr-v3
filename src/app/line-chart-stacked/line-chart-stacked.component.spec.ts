import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartStackedComponent } from './line-chart-stacked.component';

describe('LineChartStackedComponent', () => {
  let component: LineChartStackedComponent;
  let fixture: ComponentFixture<LineChartStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartStackedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
