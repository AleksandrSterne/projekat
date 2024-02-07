import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class RegisterFormGroup extends FormGroup {
  constructor() {
    super({
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required),
      confirmPassword: new FormControl<string>('', Validators.required),
    });
  }
}
