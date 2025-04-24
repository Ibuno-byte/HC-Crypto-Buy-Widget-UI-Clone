import { Component } from '@angular/core';
import { StepCryptoSelectorComponent } from '../step-crypto-selector/step-crypto-selector.component';
import { StepWalletInputComponent } from '../step-account-details/step-account-details.component';
import { StepAmountInputComponent } from '../step-verify-email/step-verify-email.component';
import { StepSummaryComponent } from '../step-summary/step-summary.component';
import { StepCompleteComponent } from '../step-complete/step-complete.component';
import { BuyStateService } from '../../../services/buy-state.service';
import { CommonModule } from '@angular/common';
import { BuySellTabsComponent } from '../buy-sell-tabs/buy-sell-tabs.component';

@Component({
  standalone: true,
  selector: 'app-buy-form-wrapper',
  imports: [
    StepCryptoSelectorComponent,
    StepWalletInputComponent,
    StepAmountInputComponent,
    StepSummaryComponent,
    StepCompleteComponent,
    BuySellTabsComponent,
    CommonModule
  ],
  templateUrl: './buy-form-wrapper.component.html',
  styleUrl: './buy-form-wrapper.component.scss',
})
export class BuyFormWrapperComponent {
  steps = [
    { label: 'Select Crypto' },
    { label: 'Wallet Address' },
    { label: 'Amount' },
    { label: 'Summary' },
    { label: 'Complete' }
  ];

  constructor(public state: BuyStateService) {}
}
