import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(public auth: AuthentificationService, public router: Router) { }

  ngOnInit() {
    this.auth.$user.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/');
      }
    });
  }

  connectEmail() {
    console.log('user : ' + this.userEmail);
    console.log('pwd : ' + this.userPassword);
    this.auth.EmailSignIn(this.userEmail, this.userPassword);
  }

}
