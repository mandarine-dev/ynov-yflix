import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Profile } from '@app/core/models/profile';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomeService } from '../home.service';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class HomeNewProfileComponent implements OnInit {

  profile = {} as Profile;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private homeSvc: HomeService,
    private authSvc: AuthentificationService,
    private storage: AngularFireStorage,
    private router: Router) { }

  ngOnInit() {
  }


  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `picture-${this.authSvc.user.uid}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(result => this.profile.photoUrl = result);
      })).subscribe(() => {
      });
  }

  validate() {
    this.createProfile();
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  private createProfile() {
    this.profile.creationDate = new Date();
    this.homeSvc.createProfile(this.profile);
  }

}
