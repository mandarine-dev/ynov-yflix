import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { HomeService } from '@components/home/home.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  constructor(private afs: AngularFirestore, private homeSvc: HomeService, private auth: AuthentificationService) { }

  profiles: Profile[];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  cultures: Culture[] = [
    { value: 'fr-FR', viewValue: 'Français' },
    { value: 'es-ES', viewValue: 'Espagnol' },
    { value: 'en-GB', viewValue: 'Anglais' }
  ];

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.homeSvc.getProfiles(this.auth.user.uid).subscribe(result => {
      this.profiles = result;
    });
  }

  // deleteVideo(playlist: string, id: string) {
  //   this.afs.collection(`playlists/${playlist}/videos`).doc(id).delete()
  //     .then(() => this.notifySvc.success('SNACK_SUCCESS_DELETE_VIDEO'))
  //     .catch((error) => this.notifySvc.error('SNACK_ERROR_DELETE_VIDEO'));
  // }

  deleteProfil(profilID) {
    this.afs.collection(`users/${this.auth.user.uid}/profiles`).doc(profilID).delete();
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Culture {
  value: string;
  viewValue: string;
}
