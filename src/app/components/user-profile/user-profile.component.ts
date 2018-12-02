import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { HomeService } from '@components/home/home.service';
import { ProfileDeleteModalComponent } from './profile-delete-modal/profile-delete-modal.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  profiles: Profile[];
  profileForm: FormGroup;

  cultures: Culture[] = [
    { value: 'fr-FR', viewValue: 'Français' },
    { value: 'es-ES', viewValue: 'Espagnol' },
    { value: 'en-GB', viewValue: 'Anglais' }
  ];

  get fm() { return this.profileForm.controls; }

  constructor(
    private afs: AngularFirestore,
    private homeSvc: HomeService,
    private auth: AuthentificationService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      tamerelapute: ['', [Validators.email, Validators.required]],
      culture: ['', Validators.required]
    });

    this.auth.$user.subscribe((user) => {
      this.getProfiles(user.uid);
    });
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
