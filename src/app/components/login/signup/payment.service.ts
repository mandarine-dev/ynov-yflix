import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  userId: string;
  membership: any;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {

    //   this.membership = this.afAuth.authState
    //     .do(user => this.userId = user.uid)
    //     .switchMap(user => {
    //       return this.db.object(`users/${user.uid}/pro-membership`);
    //     });

    // }

    // processPayment(token: any) {
    //   return this.afs.collection('users').doc() (`/users/${this.userId}/membership`)
    //     .update({ token: token.id });
    // }
  }
