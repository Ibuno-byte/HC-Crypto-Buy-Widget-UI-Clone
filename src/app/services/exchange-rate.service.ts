import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExchangeRateService {
  getRate(from: string, to: string): Observable<number> {
    return of(157.5); // Mock: 1 USDT = 157.5 KES
  }
}