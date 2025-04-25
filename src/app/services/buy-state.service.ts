import { Injectable } from '@angular/core';

type TransactionType = 'buy' | 'sell';
type Currency = 'USDT' | 'USDC' | 'ETH' | 'EUR' | 'KES' | 'USD';
type Network = 'Ethereum' | 'Tron' | 'BSC';

export interface BuyState {
  step: number;
  transactionType: TransactionType;
  currencyPay: Currency;
  currencyReceive: Currency;
  provider: string;
  network: Network;
  accountName: string;
  phoneNumber: string;
  emailAddress: string;
  amountPay: number;
  amountReceive: number;
  rate: number;
  walletAddress: string;
}

@Injectable({ providedIn: 'root' })
export class BuyStateService {
  step = 0;
  transactionType: TransactionType = 'buy';
  currencyPay: Currency = this.getCurrencyPayString();
  provider = 'Mpesa';
  network = 'Ethereum';
  accountName = 'Dominic Mulinda';
  phoneNumber = '';
  emailAddress = '';
  amountPay = 0;
  amountReceive = 0;
  currencyReceive: Currency = this.getCurrencyReceiveString();
  rate = this.getExchangeRate();
  walletAddress = 'xAbC1234567890defABC1234567890dEfAbC12345';

  getExchangeRate(): number {
    return this.transactionType === 'sell' ? 128.152 : 0.0078;
  }

  getCurrencyPayString(): 'USDT' | 'USDC' | 'ETH' | 'EUR' | 'KES' | 'USD' {
    return this.transactionType === 'sell' ? 'USDT' : 'KES';
  }

  getCurrencyReceiveString(): 'USDT' | 'USDC' | 'ETH' | 'EUR' | 'KES' | 'USD' {
    return this.transactionType === 'sell' ? 'KES' : 'USDT';
  }

  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  reset() {
    this.step = 0;
  }
}
