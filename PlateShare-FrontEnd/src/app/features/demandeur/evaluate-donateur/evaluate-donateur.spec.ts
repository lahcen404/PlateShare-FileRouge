import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDonateur } from './evaluate-donateur';

describe('EvaluateDonateur', () => {
  let component: EvaluateDonateur;
  let fixture: ComponentFixture<EvaluateDonateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluateDonateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateDonateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
