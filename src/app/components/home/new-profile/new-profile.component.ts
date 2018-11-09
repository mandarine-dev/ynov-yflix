import { Component, OnInit } from '@angular/core';
import { Profile } from '@app/core/models/profile';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class HomeNewProfileComponent implements OnInit {

  profile = {} as Profile;

  constructor(private homeSvc: HomeService) { }

  ngOnInit() {
  }

  createProfile() {
    console.log('profile', this.profile);
    this.profile.photoUrl = 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350';
    this.profile.creationDate = new Date();
    this.homeSvc.createProfile(this.profile);
  }

}
