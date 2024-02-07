import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoginCredentials, User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private _userService: UserService) {}

  register(credentials: LoginCredentials): boolean {
    const newUser: User = {
      id: this.generateId(),
      username: credentials.username,
      password: credentials.password,
    };

    this._userService.updateUsers(newUser);

    return true;
  }

  checkIfPasswordsAreMatching(
    password: string,
    repeatedPassword: string
  ): boolean {
    if (password !== repeatedPassword) return false;

    return true;
  }

  generateId(): number {
    const id = Math.floor(Math.random() * 10000);

    return id;
  }
}
