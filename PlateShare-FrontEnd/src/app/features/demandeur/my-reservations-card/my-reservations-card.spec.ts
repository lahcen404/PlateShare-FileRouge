import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReservationsCard } from './my-reservations-card';

describe('MyReservationsCard', () => {
  let component: MyReservationsCard;
  let fixture: ComponentFixture<MyReservationsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReservationsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReservationsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
