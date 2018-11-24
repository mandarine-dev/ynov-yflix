import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(public snackBar: MatSnackBar) { }

  success(text: string) {
    this.snackBar.open(text, '', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  error(text: string) {
    this.snackBar.open(text, '', {
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
}
