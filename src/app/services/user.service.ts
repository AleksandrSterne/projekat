import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  mockData: User[] = [
    {
      id: 5213,
      username: 'Pera',
      password: '123',
    },
    {
      id: 6124,
      username: 'Mika',
      password: '1234',
    },
    {
      id: 1523,
      username: 'Laza',
      password: '12345',
    },
  ];

  findUser(username: string): User | undefined {
    return this.mockData.find((user) => user.username === username);
  }

  register(username: string, password: string): boolean {
    if (this.findUser(username)) {
      return false;
    }

    const newUser: User = {
      id: this._generateId(),
      username: username,
      password: password,
    };

    this._addNewUser(newUser);

    return true;
  }

  private _addNewUser(newUser: User) {
    this.mockData = [...this.mockData, newUser];
  }

  private _generateId(): number {
    const id = Math.floor(Math.random() * 10000);

    return id;
  }
}
