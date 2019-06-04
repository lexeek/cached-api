import { TestBed } from '@angular/core/testing';

import { CachedDataService } from './cached-data.service';

describe('CachedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CachedDataService = TestBed.get(CachedDataService);
    expect(service).toBeTruthy();
  });
});
