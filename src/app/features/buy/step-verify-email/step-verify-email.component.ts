import { Component } from '@angular/core';
import { BuyStateService } from '../../../services/buy-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../button/button.component';
import { GlobalService } from '../../../services/global.service';

@Component({
  standalone: true,
  selector: 'app-step-verify-email',
  templateUrl: './step-verify-email.component.html',
  styleUrl: './step-verify-email.component.scss',
  imports: [CommonModule, FormsModule, IconButtonComponent]
})
export class StepAmountInputComponent {

  constructor(
    public state: BuyStateService,
    public globals: GlobalService,
  ) {}
  
  formErrors = {
    emailAddress: '',
  };

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = { emailAddress: '' };
  
    if (!this.state.emailAddress) {
      this.formErrors.emailAddress = 'Please enter an email address';
      isValid = false;
    } else if (!this.globals.isValidEmail(this.state.emailAddress)) {
      this.formErrors.emailAddress = 'Please enter a valid email address';
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
