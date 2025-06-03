import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveSurplus } from './reserve-surplus';

describe('ReserveSurplus', () => {
  let component: ReserveSurplus;
  let fixture: ComponentFixture<ReserveSurplus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveSurplus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveSurplus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
