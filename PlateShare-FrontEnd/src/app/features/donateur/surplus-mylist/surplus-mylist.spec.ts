import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurplusMylist } from './surplus-mylist';

describe('SurplusMylist', () => {
  let component: SurplusMylist;
  let fixture: ComponentFixture<SurplusMylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurplusMylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurplusMylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
