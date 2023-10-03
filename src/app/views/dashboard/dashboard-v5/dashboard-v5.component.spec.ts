import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardV5Component } from './dashboard-v5.component';

describe('DashboardV5Component', () => {
  let component: DashboardV5Component;
  let fixture: ComponentFixture<DashboardV5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardV5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
