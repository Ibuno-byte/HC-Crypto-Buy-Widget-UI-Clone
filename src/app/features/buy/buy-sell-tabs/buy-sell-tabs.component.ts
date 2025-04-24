import { Component } from '@angular/core';
import { IconButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-buy-sell-tabs',
  templateUrl: './buy-sell-tabs.component.html',
  styleUrl: './buy-sell-tabs.component.scss',
  imports: [IconButtonComponent]
})
export class BuySellTabsComponent {
  activeTab: 'buy' | 'sell' = 'sell';

  setActiveTab(tab: 'buy' | 'sell') {
    this.activeTab = tab;
  }
}
