import { Component } from '@angular/core';
import { BuyStateService } from '../../../services/buy-state.service';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-step-crypto-selector',
  templateUrl: './step-crypto-selector.component.html',
  styleUrls: ['./step-crypto-selector.component.scss'],
  imports: [FormsModule, IconButtonComponent]
})
export class StepCryptoSelectorComponent {
  constructor(public state: BuyStateService) {}
}