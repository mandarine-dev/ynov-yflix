import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { HelperService } from '@app/core/services/helper.service';
import { HomeService } from '@components/home/home.service';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProfileDeleteModalComponent } from './profile-delete-modal/profile-delete-modal.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  profiles: Profile[];
  profileForm: FormGroup;
  uploadPercent: Observable<number>;
  isUploading = false;
  test = '';
  user = {} as User;
  userEmail: string;
  selectedValue: string;
  cultureValue: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  cultureValidator = new FormControl('', [Validators.required]);

  cultures: Culture[] = [
    { value: 'fr', viewValue: 'Français' },
    { value: 'es', viewValue: 'Espagnol' },
    { value: 'en', viewValue: 'Anglais' }
  ];

  get fm() { return this.profileForm.controls; }

  constructor(
    private afs: AngularFirestore,
    private homeSvc: HomeService,
    private auth: AuthentificationService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private helperSvc: HelperService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      emailsValidators: ['', [Validators.email, Validators.required]],
      culture: ['', Validators.required]
    });

    this.auth.$user.subscribe((user) => {
      this.getProfiles(user.uid);
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'REQUIRED_FIELD' :
      this.email.hasError('email') ? 'REQUIRED_EMAIL' :
        '';
  }

  getCultureErrorMessage() {
    return this.cultureValidator.hasError('required') ? 'REQUIRED_FIELD' :
      '';
  }

  openConfirmationModal(item: Profile) {
    const dialogRef = this.dialog.open(ProfileDeleteModalComponent, {
      width: '600px',
      height: '210px',
      data: item,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(title => {
    });
  }

  uploadFile(event, user) {
    const file = event.target.files[0];
    const filePath = `picture-${this.helperSvc.newGuid()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.isUploading = true;
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(result => {
          // this.user.photoURL = result;
          this.test = result;
          this.isUploading = false;
          this.auth.updateUserPhoto(user, this.test);
        });
      })).subscribe(() => {
      });
  }

  uploadUserInfos(user) {
    // this.auth.updateUserInformations(user,this.userEmail,this.selectedValue);
    switch (this.selectedValue) {
      case 'Français':
        this.cultureValue = 'fr';
        break;
      case 'Anglais':
        this.cultureValue = 'us';
        break;
      case 'Espagnol':
        this.cultureValue = 'es';
        break;
    }

    this.auth.updateUserInformations(user, this.userEmail, this.cultureValue);

    console.log('new email: ' + this.userEmail);
    console.log('new culture value: ' + this.cultureValue);
  }

  getProfiles(uid) {
    this.homeSvc.getProfiles(uid).subscribe(result => {
      this.profiles = result;
    });
  }
}

export interface Culture {
  value: string;
  viewValue: string;
}
