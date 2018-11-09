import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '@app/core/models/profile';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(private authSvc: AuthentificationService, private afs: AngularFirestore) { }

    getProfiles(uid: string): Observable<Profile[]> {
        return this.afs.collection<Profile>(`users/${uid}/profiles`).valueChanges();
    }

    createProfile(profile: Profile) {
        const userRef = this.afs.collection('users').doc(this.authSvc.user.uid).collection('profiles');
        return userRef.add(profile);
    }

}
