import { TestBed } from '@angular/core/testing';

import { StarmapHubService } from './starmap-hub.service';

describe('StarmapHubService', () => {
  let service: StarmapHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarmapHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
