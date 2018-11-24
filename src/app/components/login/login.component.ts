import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthentificationService, public router: Router) { }

  ngOnInit() {
    this.auth.$user.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    });
  }

}
