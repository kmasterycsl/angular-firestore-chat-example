import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private afa: AngularFireAuth) {}

  public getCurrentUser(): Promise<User> {
    // Use anonymous user for quick example.
    return this.afa.auth.signInAnonymously().then(response => response.user);
  }
}
