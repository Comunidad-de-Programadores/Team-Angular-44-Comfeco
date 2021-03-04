import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersRef: AngularFireObject<any>;

  constructor(private firebaseAuth: AngularFireAuth, private firebaseDatabase: AngularFireDatabase) {}

  signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  async signUp(user: Partial<User>, password: string) {
    const data = await this.firebaseAuth.createUserWithEmailAndPassword(user.email, password);
    return await this.saveUserData(user, data.user.uid);
  }

  private async saveUserData(user: Partial<User>, userId: string) {
    this.usersRef = this.firebaseDatabase.object(`users/${userId}`);
    return await this.usersRef.set(user);
  }

  recoverPassword(email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.firebaseAuth.signOut();
  }

  getAuthState() {
    return this.firebaseAuth.authState;
  }

  getCurrentUser(userID: string) {
    this.usersRef = this.firebaseDatabase.object(`users/${userID}`);
    return this.usersRef.snapshotChanges().pipe(
      map((snapshot) => {
        return { ...snapshot.payload.val(), id: snapshot.key };
      })
    );
  }
}
