import { Component } from '@angular/core';
import { BuyFormWrapperComponent } from './features/buy/buy-form-wrapper/buy-form-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BuyFormWrapperComponent],
  template: `<app-buy-form-wrapper />`,
})
export class AppComponent {}
