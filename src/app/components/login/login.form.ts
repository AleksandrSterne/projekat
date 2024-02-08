import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Injectable()
export class LoginFormGroup extends FormGroup {
  public findUserCB: (username: string) => boolean = (
    username: string
  ): boolean => {
    return false;
  };

  constructor() {
    super({
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required),
    });

    const _username = this.get('username');

    if (_username) {
      _username.setValidators([
        Validators.required,
        (control: AbstractControl): ValidationErrors | null => {
          if (!control.value) return null;

          if (!this.findUserCB(control.value)) {
            return { userNotFound: true };
          }

          return null;
        },
      ]);
    }
  }
}
