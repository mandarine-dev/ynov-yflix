import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HeaderModalComponent } from './header-modal/header-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  entryComponents: [HeaderModalComponent]
})

export class HeaderComponent implements OnInit {

  animal: string;

  constructor(public auth: AuthentificationService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  disconnect() {
    this.auth.signOut();
  }

  openModal() {
    console.log('The dialog was open');
    const dialogRef = this.dialog.open(HeaderModalComponent, {
      width: '450px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
