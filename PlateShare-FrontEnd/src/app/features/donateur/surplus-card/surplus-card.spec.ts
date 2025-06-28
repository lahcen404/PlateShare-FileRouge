import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusCard } from './surplus-card';

describe('SurplusCard', () => {
  let component: SurplusCard;
  let fixture: ComponentFixture<SurplusCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurplusCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurplusCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
