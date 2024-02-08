import { Injectable } from '@angular/core';
import { LoginCredentials, User } from './User';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  currentUser$: Observable<User | null> = this._currentUser.asObservable();

  constructor(private _userService: UserService) {}

  withCredentials(credentials: LoginCredentials): boolean {
    const foundUser = this._userService.findUser(credentials.username);

    if (!foundUser) return false;

    if (foundUser.password !== credentials.password) return false;

    this._currentUser.next(foundUser);

    return true;
  }
}
