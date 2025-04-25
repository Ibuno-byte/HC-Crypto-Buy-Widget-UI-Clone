import { Component } from '@angular/core';
import { BuyStateService } from '../../../services/buy-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-step-account-details',
  templateUrl: './step-account-details.component.html',
  styleUrls: ['./step-account-details.component.scss'],
  imports: [FormsModule, CommonModule, IconButtonComponent],
})
export class StepWalletInputComponent {
  error = false;

  constructor(public state: BuyStateService) {}

  formErrors = {
    accountName: '',
    phoneNumber: '',
  };

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {
      accountName: '',
      phoneNumber: '',
    };

    if (!this.state.accountName) {
      this.formErrors.accountName = 'Please enter an account name';
      isValid = false;
    } else if (!this.state.phoneNumber) {
      this.formErrors.phoneNumber = 'Please enter a phone number';
      isValid = false;
    }

    return isValid;
  }

  handlePhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    let newChar = '';
    if (event instanceof InputEvent && event.inputType === 'insertText') {
      newChar = event.data || '';
    } else if (event instanceof KeyboardEvent && event.key.length === 1) {
      newChar = event.key;
    }

    const allowedChars = /^[\d\+\-\(\)\s]*$/;

    if (newChar && !allowedChars.test(newChar)) {
      event.preventDefault();
      return;
    }

    value = value;

    this.validatePhoneNumber(value);

    this.state.phoneNumber = value;
  }

  validatePhoneNumber(value: string): void {
    const digitsOnly = value.replace(/\D/g, '');

    if (!digitsOnly) {
      this.formErrors.phoneNumber = 'Phone number is required';
    } else if (digitsOnly.length < 10) {
      this.formErrors.phoneNumber = 'Phone number must be at least 10 digits';
    } else if (!/^[+]?[\d\s\-()]+$/.test(value)) {
      this.formErrors.phoneNumber = 'Invalid phone number format';
    } else {
      this.formErrors.phoneNumber = '';
    }
  }

  validateAndProceed() {
    if (this.validateForm()) {
      this.state.nextStep();
    }
  }
}
