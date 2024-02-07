import { Injectable } from '@angular/core';
import { LoginCredentials, User } from '../models/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> = this._currentUser.asObservable();

  mockData: User[] = [
    {
      id: 5213,
      username: 'Pera',
      password: '123'
    },
    {
      id: 6124,
      username: 'Mika',
      password: '1234'
    },
    {
      id: 1523,
      username: 'Laza',
      password: '12345'
    }
  ];

  approveLogin(loginCredentials: LoginCredentials): boolean {
    const foundUser = this.mockData.find(user => user.username === loginCredentials.username);

    if (!foundUser) return false;

    if (!(foundUser.password === loginCredentials.password)) return false;

    this._currentUser.next(foundUser);

    return true;
  }
}
