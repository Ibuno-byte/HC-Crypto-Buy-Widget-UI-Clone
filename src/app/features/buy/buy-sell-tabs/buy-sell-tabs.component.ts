import { Component } from '@angular/core';
import { IconButtonComponent } from '../button/button.component';
import { BuyStateService } from '../../../services/buy-state.service';

@Component({
  selector: 'app-buy-sell-tabs',
  templateUrl: './buy-sell-tabs.component.html',
  styleUrl: './buy-sell-tabs.component.scss',
  imports: [IconButtonComponent],
})
export class BuySellTabsComponent {
  activeTab: 'buy' | 'sell' = 'sell';

  constructor(public state: BuyStateService) {
    this.activeTab = state.transactionType;
  }

  setActiveTab(tab: 'buy' | 'sell') {
    this.activeTab = tab;
    this.state.transactionType = tab;
    this.state.currencyPay = this.state.getCurrencyPayString();
    this.state.currencyReceive = this.state.getCurrencyReceiveString();
    this.state.rate = this.state.getExchangeRate();
    this.convertCurrency();
  }

  convertCurrency() {
    this.state.amountReceive = this.state.amountPay * this.state.rate
  }
}
