import { TestBed } from '@angular/core/testing';

import { ComunitiesService } from './comunities.service';

describe('ComunitiesService', () => {
  let service: ComunitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
