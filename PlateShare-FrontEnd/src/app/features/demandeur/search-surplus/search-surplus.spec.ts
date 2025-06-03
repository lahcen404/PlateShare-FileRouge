import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSurplus } from './search-surplus';

describe('SearchSurplus', () => {
  let component: SearchSurplus;
  let fixture: ComponentFixture<SearchSurplus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSurplus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSurplus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
