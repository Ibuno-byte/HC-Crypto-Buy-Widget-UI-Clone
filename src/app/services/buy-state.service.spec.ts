import { TestBed } from '@angular/core/testing';

import { BuyStateService } from './buy-state.service';

describe('BuyStateService', () => {
  let service: BuyStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
