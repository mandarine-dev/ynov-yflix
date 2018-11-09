import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { HomeService } from '@components/home/home.service';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css']
})

export class HomeProfileComponent implements OnInit {

  profiles: Profile[];

  constructor(private router: Router, private homeSvc: HomeService, private authSvc: AuthentificationService) { }

  ngOnInit() {
    this.getProfiles();
  }

  openProfile(profile) {
    console.log('openProfile', profile);
    const url = 'home/' + profile.id;
    this.router.navigate([url]);
  }

  openAddProfile() {
    const url = 'home/new-profile';
    this.router.navigate([url]);
  }

  getProfiles() {
    this.homeSvc.getProfiles(this.authSvc.user.uid).subscribe(result => {
      console.log('users ', result);
      this.profiles = result;
    });
  }

}
