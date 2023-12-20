import { TestBed } from '@angular/core/testing';

import { MindenService } from './minden.service';

describe('MindenService', () => {
  let service: MindenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
