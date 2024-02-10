import { Injectable } from '@angular/core';
import { LoginCredentials, User } from './user.model';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  currentUser$: Observable<User | null> = this._currentUser.asObservable();

  constructor(private _userService: UserService, private _router: Router) {}

  withCredentials(credentials: LoginCredentials): boolean {
    const foundUser = this._userService.findUser(credentials.username);

    if (!foundUser) return false;

    if (foundUser.password !== credentials.password) return false;

    this._currentUser.next(foundUser);

    localStorage.setItem('token', foundUser.id.toString());

    this._router.navigateByUrl('/account');

    return true;
  }

  setCurrentUser(user: User) {
    this._currentUser.next(user);
  }

  authenticate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) return false;

    if (!this._currentUser.value) return false;

    if (this._currentUser.value.id !== +token) return false;

    return true;
  }

  logout() {
    this._currentUser.next(null);

    localStorage.removeItem('token');

    this._router.navigateByUrl('/login');
  }
}
