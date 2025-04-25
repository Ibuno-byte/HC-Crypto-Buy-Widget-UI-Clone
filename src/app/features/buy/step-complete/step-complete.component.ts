import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyStateService } from '../../../services/buy-state.service';
import { IconButtonComponent } from '../button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { QRCodeComponent } from 'angularx-qrcode';
import { GlobalService } from '../../../services/global.service';

@Component({
  standalone: true,
  selector: 'app-step-complete',
  templateUrl: './step-complete.component.html',
  styleUrl: './step-complete.component.scss',
  imports: [CommonModule, MatIconModule, IconButtonComponent, QRCodeComponent],
})
export class StepCompleteComponent implements OnInit, OnDestroy {
  minutes = 30;
  seconds = 0;
  timeLeft = 1800; // 30 minutes in seconds
  private timer: any;

  qrData = 'https://example.com/payment/12345'; // Your data to encode
  qrSize = 256;

  constructor(public state: BuyStateService, public globals: GlobalService) {}

  ngOnInit() {
    this.startTimer();
  }

  copyText(element: string) {
    const icon = document.getElementById('copyIcon');
    if (icon) {
      this.globals.showToast("Copied");
      this.globals.copyOnClick(icon, () => {
        // Get text dynamically from somewhere
        return document.getElementById(element)?.textContent || '';
      });
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.minutes = Math.floor(this.timeLeft / 60);
        this.seconds = this.timeLeft % 60;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
