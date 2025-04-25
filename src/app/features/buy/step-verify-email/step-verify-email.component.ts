import { Component } from '@angular/core';
import { ExchangeRateService } from '../../../services/exchange-rate.service';
import { BuyStateService } from '../../../services/buy-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-step-verify-email',
  templateUrl: './step-verify-email.component.html',
  styleUrl: './step-verify-email.component.scss',
  imports: [CommonModule, FormsModule, IconButtonComponent]
})
export class StepAmountInputComponent {
  cryptoAmount = 0;
  error = "";

  constructor(
    public state: BuyStateService,
    private rateService: ExchangeRateService
  ) {
    this.convert();
  }

  convert() {
    this.rateService.getRate('KES', this.state.currencyPay).subscribe((rate) => {
      this.state.rate = rate;
      this.cryptoAmount = this.state.amountReceive / rate;
    });
  }
}
