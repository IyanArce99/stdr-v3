import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeapmapComponent } from './table-heapmap.component';

describe('TableHeapmapComponent', () => {
  let component: TableHeapmapComponent;
  let fixture: ComponentFixture<TableHeapmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeapmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeapmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
