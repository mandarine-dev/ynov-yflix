import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { NotifyService } from '@app/core/services/notify.service';

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
    public notifySvc: NotifyService
  ) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deleteProfil(profilID) {
    this.afs.collection(`users/${this.auth.user.uid}/profiles`).doc(profilID).delete()
      .then(() => this.notifySvc.success('SNACK_SUCCESS_DELETE_PROFILE'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_DELETE_PROFILE'));
    this.dialogRef.close();
  }

}
