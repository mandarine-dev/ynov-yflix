import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { Observable } from 'rxjs';
import { NotifyService } from '@app/core/services/notify.service';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(
        private authSvc: AuthentificationService,
        private storage: AngularFireStorage,
        private afs: AngularFirestore,
        private notifySvc: NotifyService
    ) { }

    getProfiles(uid: string): Observable<Profile[]> {
        return this.afs.collection<Profile>(`users/${uid}/profiles`, ref => ref.orderBy('creationDate', 'desc')).valueChanges();
    }

    createProfile(profile: Profile) {
        const userRef = this.afs.firestore.collection('users').doc(this.authSvc.user.uid).collection('profiles').doc();
        // set id after empty doc created
        profile.id = userRef.id;
        return userRef.set(profile)
            .then(() => this.notifySvc.success('SNACK_SUCCESS_ADD_PROFILE'))
            .catch((error) => this.notifySvc.error('SNACK_ERROR_ADD_PROFILE'));
    }

}
