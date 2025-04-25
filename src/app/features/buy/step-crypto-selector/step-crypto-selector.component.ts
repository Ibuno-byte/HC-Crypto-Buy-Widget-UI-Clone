import { Component } from '@angular/core';
import { BuyStateService } from '../../../services/buy-state.service';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-step-crypto-selector',
  templateUrl: './step-crypto-selector.component.html',
  styleUrls: ['./step-crypto-selector.component.scss'],
  imports: [CommonModule, FormsModule, IconButtonComponent]
})
export class StepCryptoSelectorComponent {
  constructor(public state: BuyStateService) {}

  cryptoCurrencies = [
    { value: 'USDT', label: 'USDT' },
    { value: 'USDC', label: 'USDC' },
    { value: 'ETH', label: 'ETH' }
  ];

  fiatCurrencies = [
    { value: 'KES', label: 'KES' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
  ];

  getFirstCurrencyOptions() {
    return this.state.transactionType === 'sell' 
      ? this.cryptoCurrencies 
      : this.fiatCurrencies;
  }

  getSecondCurrencyOptions() {
    return this.state.transactionType === 'sell' 
      ? this.fiatCurrencies 
      : this.cryptoCurrencies;
  }

  onTransactionTypeChange() {
    const temp = this.state.currencyPay;
    this.state.currencyPay = this.state.currencyReceive;
    this.state.currencyReceive = temp;
  }

  convertCurrency() {
    this.state.amountReceive = this.state.amountPay * this.state.rate
  }  

  handleAmountInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    // For modern browsers (InputEvent)
    if (typeof InputEvent !== 'undefined' && event instanceof InputEvent) {
      if (input.value === '0' && event.data && /^\d$/.test(event.data)) {
        input.value = event.data;
        this.state.amountPay = Number(event.data);
        event.preventDefault();
      }
    }
    // Fallback for older browsers
    else if ((event as KeyboardEvent).key) {
      const keyEvent = event as KeyboardEvent;
      if (input.value === '0' && /^\d$/.test(keyEvent.key)) {
        input.value = keyEvent.key;
        this.state.amountPay = Number(keyEvent.key);
        event.preventDefault();
      }
    }

    this.convertCurrency();
  }
  
  formErrors = {
    amountPay: '',
  };

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = { amountPay: '' };

    if (!this.state.amountPay || isNaN(Number(this.state.amountPay))) {
      this.formErrors.amountPay = 'Please enter a valid amount';
      isValid = false;
    } else if (Number(this.state.amountPay) <= 0) {
      this.formErrors.amountPay = 'Amount must be greater than 0';
      isValid = false;
    }

    return isValid;
  }

  validateAndProceed() {
    if (this.validateForm()) {
      this.state.nextStep();
    }
  }
}