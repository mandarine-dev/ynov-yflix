import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { HomeService } from '@components/home/home.service';


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
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      tamerelapute: ['', [Validators.email, Validators.required]],
      culture: ['', Validators.required]
    });

    this.auth.$user.subscribe((user) => {
      this.getProfiles(user.uid);
    });
  }

  getProfiles(uid) {
    this.homeSvc.getProfiles(uid).subscribe(result => {
      this.profiles = result;
    });
  }

  deleteProfil(profilID) {
    this.afs.collection(`users/${this.auth.user.uid}/profiles`).doc(profilID).delete();
  }
}

export interface Culture {
  value: string;
  viewValue: string;
}
