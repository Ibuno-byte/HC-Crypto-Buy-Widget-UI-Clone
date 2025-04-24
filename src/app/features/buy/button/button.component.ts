import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [CommonModule, MatIconModule]
})
export class IconButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() iconPosition: 'before' | 'after' = 'after';
  @Input() active: boolean = false;
  @Input() customClass: string = '';
}
