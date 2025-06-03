import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishSurplus } from './publish-surplus';

describe('PublishSurplus', () => {
  let component: PublishSurplus;
  let fixture: ComponentFixture<PublishSurplus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishSurplus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishSurplus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
