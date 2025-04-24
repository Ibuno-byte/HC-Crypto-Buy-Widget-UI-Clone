import { Component } from '@angular/core';
import { WalletValidationService } from '../../../services/wallet-validation.service';
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

  constructor(
    public state: BuyStateService,
    private walletService: WalletValidationService
  ) {}

  validate() {
    this.state.nextStep();
    // this.walletService
    //   .validateAddress(this.state.accountName)
    //   .subscribe((valid) => {
    //     this.error = !valid;
    //     if (valid) this.state.nextStep();
    //   });
  }
}
