import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileId = this.route.snapshot.params['id'];
    if (this.profileId) {
      console.log('Welcome !', this.profileId);
    }
  }

}
