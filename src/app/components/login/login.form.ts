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
  usernameErrorMessage = '';
  passwordErrorMessage = '';

  errorMessages = {
    required: 'This field is required.',
    userNotFound: 'The username is not found.',
  };

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
    const _password = this.get('password');

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

      _username.valueChanges.subscribe(() => {
        if (_username.hasError('required'))
          this.usernameErrorMessage = this.errorMessages['required'];
        else if (_username.hasError('userNotFound'))
          this.usernameErrorMessage = this.errorMessages['userNotFound'];
        else this.usernameErrorMessage = '';
      });
    }

    if (_password) {
      _password.valueChanges.subscribe(() => {
        console.log(this.passwordErrorMessage);
        if (_password.hasError('required'))
          this.passwordErrorMessage = this.errorMessages['required'];
        else this.passwordErrorMessage = '';
      });
    }
  }
}
