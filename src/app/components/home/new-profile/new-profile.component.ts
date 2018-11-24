import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Profile } from '@app/core/models/profile';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HomeService } from '../home.service';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '@app/core/services/helper.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class HomeNewProfileComponent implements OnInit {

  profileForm: FormGroup;
  profile = {} as Profile;
  uploadPercent: Observable<number>;

  get fm() { return this.profileForm.controls; }

  constructor(
    private homeSvc: HomeService,
    private authSvc: AuthentificationService,
    private storage: AngularFireStorage,
    private router: Router,
    private formBuilder: FormBuilder,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
    this.profile.photoUrl = 'https://newmusicshelf.com/wp-content/uploads/blank-profile-picture.png';
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `picture-${this.helperSvc.newGuid()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        const downloadURL = fileRef.getDownloadURL();
        downloadURL.subscribe(result => this.profile.photoUrl = result);
      })).subscribe(() => {
      });
  }

  onCancel() {
    this.backHome();
  }

  onCreateProfile() {
    this.createProfile();
  }

  backHome() {
    this.router.navigateByUrl('/');
  }

  private createProfile() {
    this.profile.creationDate = new Date();
    this.homeSvc.createProfile(this.profile);
    this.backHome();
  }

}
