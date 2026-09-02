import { TestBed } from '@angular/core/testing';

import { HardCodedAuthentication } from './hard-coded-authentication';

describe('HardCodedAuthentication', () => {
  let service: HardCodedAuthentication;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use the session storage authenticated user as logged in state', () => {
    sessionStorage.setItem('authenticatedUser', 'sandaniel');

    expect(service.loggedIn).toBe(true);
  });
});
