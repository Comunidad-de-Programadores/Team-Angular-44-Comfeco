import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/auth';
import { Badge } from 'src/app/core/models/badge.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersRef: AngularFireObject<any>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebaseDatabase: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

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

  updateUser(user: User, userId: string) {
    return this.firebaseDatabase.object(`users/${userId}`).update(user);
  }

  updateSocialBadge(badges: Badge[], socialBadge: Badge, userId: string) {
    return this.firebaseDatabase.object(`users/${userId}`).update({ badges: [...badges, socialBadge] });
  }

  uploadProfileImage(name: string, file: File) {
    const filePath = `profiles/${name}`;
    const task = this.storage.upload(filePath, file);
    return task;
  }

  updateProfileImage(userId: string, imageProfile: string) {
    return this.firebaseDatabase.object(`users/${userId}`).update({ image: imageProfile });
  }

  recoverPassword(email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email);
  }

  async updatePassword(
    currentEmail: string,
    newEmail: string,
    currentPassword: string,
    newPassword: string,
    userId: string
  ) {
    const userCredential = await this.firebaseAuth.signInWithEmailAndPassword(currentEmail, currentPassword);
    await userCredential.user.updatePassword(newPassword);
    if (userCredential.user.email !== newEmail) {
      await userCredential.user.updateEmail(newEmail);
      await this.firebaseDatabase.object(`users/${userId}`).update({ email: newEmail });
      return await this.firebaseAuth.signInWithEmailAndPassword(newEmail, newPassword);
    } else {
      return userCredential;
    }
  }

  logout() {
    return this.firebaseAuth.signOut();
  }

  getAuthState() {
    return this.firebaseAuth.authState;
  }

  isLogged() {
    return this.getAuthState().pipe(map((user) => user !== null));
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
