import { TestBed } from '@angular/core/testing';

import { WalletValidationService } from './wallet-validation.service';

describe('WalletValidationService', () => {
  let service: WalletValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
