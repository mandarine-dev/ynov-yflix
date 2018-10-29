import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthentificationService) { }

  ngOnInit() {
  }

}
