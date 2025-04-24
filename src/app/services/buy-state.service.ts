import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BuyStateService {
  step = 0;
  crypto: 'USDT' | 'USDC' = 'USDT';
  provider = 'Mpesa';
  network = 'Ethereum';
  accountName = 'Dominic Mulinda';
  phoneNumber = '';
  emailAddress = '';
  amountPay = 0;
  amountReceive = 0;
  currencyReceive: 'ETH' | 'KES' = 'KES';
  rate = 157.5;

  nextStep() { this.step++; }
  prevStep() { this.step--; }
  reset() { this.step = 0; }
}