import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WalletValidationService {
  validateAddress(address: string): Observable<boolean> {
    const isValid = /^0x[a-fA-F0-9]{40}$/.test(address);
    return of(isValid);
  }
}