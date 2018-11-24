import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(public snackBar: MatSnackBar, private translate: TranslateService) { }

  success(text: string) {
    this.snackBar.open(this.translate.instant(text), '', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  error(text: string) {
    this.snackBar.open(this.translate.instant(text), '', {
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
}
