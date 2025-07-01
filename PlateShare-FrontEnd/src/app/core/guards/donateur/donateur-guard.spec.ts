import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { donateurGuard } from './donateur-guard';

describe('donateurGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => donateurGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
