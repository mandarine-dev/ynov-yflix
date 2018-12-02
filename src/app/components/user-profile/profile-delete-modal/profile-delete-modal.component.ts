import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';

@Component({
  selector: 'app-profile-delete-modal',
  templateUrl: './profile-delete-modal.component.html',
  styleUrls: ['./profile-delete-modal.component.css']
})
export class ProfileDeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProfileDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Profile,
    private afs: AngularFirestore,
    private auth: AuthentificationService,
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deleteProfil(profilID) {
    this.afs.collection(`users/${this.auth.user.uid}/profiles`).doc(profilID).delete();
    this.dialogRef.close();
  }

}
