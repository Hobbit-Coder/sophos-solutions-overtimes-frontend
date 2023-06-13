import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessRoleGuard } from './access-role.guard';

describe('accessRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
