import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeurDashboard } from './demandeur-dashboard';

describe('DemandeurDashboard', () => {
  let component: DemandeurDashboard;
  let fixture: ComponentFixture<DemandeurDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeurDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeurDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
