import { Injectable } from '@angular/core';
import { User } from '../models/User';

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

  updateUsers(newUser: User) {
    this.mockData = [...this.mockData, newUser];
  }
}
