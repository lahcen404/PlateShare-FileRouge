import { TestBed } from '@angular/core/testing';

import { Surplus } from './surplus';

describe('Surplus', () => {
  let service: Surplus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Surplus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
