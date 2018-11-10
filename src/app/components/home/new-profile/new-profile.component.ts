import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Profile } from '@app/core/models/profile';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class HomeNewProfileComponent implements OnInit {

  profile = {} as Profile;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private homeSvc: HomeService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createProfile() {
    console.log('profile', this.profile);
    this.profile.photoUrl = 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350';
    this.profile.creationDate = new Date();
    this.homeSvc.createProfile(this.profile);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe();
  }

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const path = 'pierre';
  //   this.homeSvc.uploadImage(file, path);
  // }

}
