import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateurDashboard } from './donateur-dashboard';

describe('DonateurDashboard', () => {
  let component: DonateurDashboard;
  let fixture: ComponentFixture<DonateurDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateurDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateurDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
