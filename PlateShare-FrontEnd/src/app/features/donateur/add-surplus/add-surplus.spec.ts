import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurplus } from './add-surplus';

describe('AddSurplus', () => {
  let component: AddSurplus;
  let fixture: ComponentFixture<AddSurplus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSurplus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSurplus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
