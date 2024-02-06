import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginFormGroup {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mockData: LoginCredentials[] = [
    {
      username: 'Pera',
      password: '123'
    },
    {
      username: 'Mika',
      password: '1234'
    },
    {
      username: 'Laza',
      password: '12345'
    }
  ];
  
  initializeLoginForm(): FormGroup {
    return new FormGroup({
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required)
    })
  }

  approveLogin(credentials: LoginCredentials): boolean {
    if (!this.checkUsername(credentials.username) || !this.checkPassword(credentials.password)) return false;
    
    return true;
  }

  checkUsername(username: string): boolean {
    if (!this.mockData.find(el => el.username === username)) return false;

    return true;
  }

  checkPassword(password: string): boolean {
    if (!this.mockData.find(el => el.password === password)) return false;

    return true;
  }
}
