import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authState = new Subject<string>();

  login() {
    this.authState.next('ingelogd');
  }
  logout() {
    this.authState.next('uitgelogd');
  }
}
