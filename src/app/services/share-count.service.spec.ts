import { TestBed } from '@angular/core/testing';

import { ShareCountService } from './share-count.service';

describe('ShareCountService', () => {
  let service: ShareCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
