import { TestBed, inject } from '@angular/core/testing';

import { SecurityGuard } from './security.guard';

describe('SecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityGuard]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    guard.canActivate();
    expect(guard).toBeTruthy();
  }));
});
