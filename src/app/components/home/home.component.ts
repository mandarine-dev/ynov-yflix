import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles = [
    {
      id: 1,
      name: 'francois',
      img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
    },
    {
      id: 2,
      name: 'caroline',
      img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
    },
    {
      id: 3,
      name: 'pierre',
      img: 'https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif'
    },
    {
      id: 3,
      name: 'add',
      img: 'https://static.dbca.wa.gov.au/static/libs/uswds/0.12.1/img/plus-alt.svg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProfile(profile) {
    console.log('openProfile', profile);
    const url = 'home/' + profile.id;
    this.router.navigate([url]);
  }

}
