import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private snackBar: MatSnackBar) {}
  
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const rfc5322Pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return rfc5322Pattern.test(email);
  }

  formatNumberWithCommas(num: number, decimalPlaces: number = 2): string {
    // Handle NaN or invalid numbers
    if (isNaN(num)) {
      return '0.00';
    }

    // Round the number to the specified decimal places
    const roundedNum =
      Math.round(num * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    // Split the number into integer and decimal parts
    const parts = roundedNum.toString().split('.');

    // Format the integer part with commas
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Handle the decimal part
    let decimalPart = '';
    if (decimalPlaces > 0) {
      decimalPart =
        parts.length > 1
          ? parts[1].padEnd(decimalPlaces, '0').substring(0, decimalPlaces)
          : ''.padStart(decimalPlaces, '0');
    }

    // Combine the parts
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  }

  /**
   * Copies text to the clipboard when an element is clicked
   * @param element The HTML element that triggers the copy
   * @param text The text to copy (or a function that returns the text)
   * @param callback Optional callback after copying (success/failure)
   */
  copyOnClick(
    element: HTMLElement,
    text: string | (() => string),
    callback?: (success: boolean) => void
  ): void {
    element.addEventListener('click', async () => {
      const textToCopy = typeof text === 'function' ? text() : text;

      try {
        await navigator.clipboard.writeText(textToCopy);
        callback?.(true); // Success
      } catch (err) {
        console.error('Failed to copy text: ', err);
        callback?.(false); // Failure
      }
    });
  }

  showToast(
    message: string,
    toastType: 'success' | 'error' | 'warning' = 'success'
  ): void {
    this.showNotification(message, `${toastType}-toast`);
  }

  private showNotification(
    message: string,
    panelClass: string,
    action: string = 'Close',
    duration: number = 3000
  ): void {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [panelClass],
    });
  }
}
