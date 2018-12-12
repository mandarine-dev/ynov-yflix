import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@core/models/user';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NotifyService } from '../notify.service';

@Injectable({ providedIn: 'root' })
export class AuthentificationService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    public notifySvc: NotifyService) {
    this.$user = this.afAuth.authState.pipe(
      switchMap(_user => {
        if (_user) {
          this.userSubject.next(_user);
          return this.afs.doc<User>(`users/${_user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get user() {
    return this.userSubject.value;
  }

  get loggedIn() {
    return !!this.userSubject.value;
  }

  public $user: Observable<User>;
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  EmailRegistration(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        this.notifySvc.success('SNACK_SUCCESS_EMAIL_REGISTRATION');
        this.updateUserDataEmail(credential.user);
        this.router.navigate(['/']);
      })
      .catch((error) => this.notifySvc.error('SNACK_ERROR_MODIFY_VIDEO'));
  }

  EmailSignIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.notifySvc.success('SNACK_SUCCESS_MODIFY_VIDEO'))
      .catch((error) => this.notifySvc.error('SNACK_ERROR_MODIFY_VIDEO'));
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      subtitleEnabled: false,
      culture: 'fr'
    };

    return userRef.set(data, { merge: true });

  }

  private updateUserDataEmail(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.email,
      photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3PDiP1pB51WLds8fF2xYMKEmFF38IorE-oOe0JW68m3ljA_a',
      subtitleEnabled: false,
      culture: 'fr'
    };

    return userRef.set(data, { merge: true });

  }

  updateUserInformations(user, newEmail: string, newCulture: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    userRef.update({ 'email': newEmail });
    userRef.update({ 'culture': newCulture });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  userObservable() {
    return this.userSubject.asObservable();
  }

  updateUserPhoto(user, photoUrl: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    userRef.update({ 'photoURL': photoUrl });
  }

}
