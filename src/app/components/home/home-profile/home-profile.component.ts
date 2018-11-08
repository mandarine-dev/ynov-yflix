import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.css']
})

export class HomeProfileComponent implements OnInit {

  profileId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileId = this.route.snapshot.params['id'];
    if (this.profileId) {
      console.log('Welcome !', this.profileId);
    }
  }

}
