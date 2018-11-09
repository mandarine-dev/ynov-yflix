import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '@app/core/models/profile';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(private afs: AngularFirestore) { }

    getProfiles(uid: string): Observable<Profile[]> {
        return this.afs.collection<Profile>(`users/${uid}/profiles`).valueChanges();
    }

}
