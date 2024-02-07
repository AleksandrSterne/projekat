import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginForm extends FormGroup {
  constructor() {
    super({
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required)
    });
  }
}
