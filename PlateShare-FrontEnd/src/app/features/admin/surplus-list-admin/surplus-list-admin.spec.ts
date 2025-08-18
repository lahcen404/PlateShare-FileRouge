import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusListAdmin } from './surplus-list-admin';

describe('SurplusListAdmin', () => {
  let component: SurplusListAdmin;
  let fixture: ComponentFixture<SurplusListAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurplusListAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurplusListAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
