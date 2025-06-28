import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusUpdate } from './surplus-update';

describe('SurplusUpdate', () => {
  let component: SurplusUpdate;
  let fixture: ComponentFixture<SurplusUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurplusUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurplusUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
