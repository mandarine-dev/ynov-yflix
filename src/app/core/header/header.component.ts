import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(public auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  disconnect() {
    this.auth.signOut();
  }

}
