import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusList } from './surplus-list';

describe('SurplusList', () => {
  let component: SurplusList;
  let fixture: ComponentFixture<SurplusList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurplusList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurplusList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
