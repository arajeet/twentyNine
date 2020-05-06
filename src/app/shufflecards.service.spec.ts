import { TestBed } from '@angular/core/testing';

import { ShufflecardsService } from './shufflecards.service';

describe('ShufflecardsService', () => {
  let service: ShufflecardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShufflecardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
