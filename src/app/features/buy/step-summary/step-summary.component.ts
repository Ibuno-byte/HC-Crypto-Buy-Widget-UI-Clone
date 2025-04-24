import { Component } from '@angular/core';
import { BuyStateService } from '../../../services/buy-state.service';
import { IconButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrl: './step-summary.component.scss',
  imports: [IconButtonComponent],
})
export class StepSummaryComponent {
  constructor(
    public state: BuyStateService,
  ) {}
}
