import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function passwordMatchValidator(
  passwordControl: AbstractControl | null
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!passwordControl) return null;

    if (control.value !== passwordControl.value) return { match: true };

    return null;
  };
}

@Injectable()
export class RegisterFormGroup extends FormGroup {
  errorMessages = {
    required: 'This field is required.',
    userFound: 'The username is already taken.',
    match: 'The passwords do not match.',
  };

  usernameErrorMessage = this.errorMessages['required'];
  passwordErrorMessage = this.errorMessages['required'];
  confirmPasswordErrorMessage = this.errorMessages['required'];

  public findUserCB: (username: string) => boolean = (
    username: string
  ): boolean => {
    return false;
  };

  constructor() {
    super({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    });

    const _username = this.get('username');
    const _password = this.get('password');
    const _confirmPassword = this.get('confirmPassword');

    if (_username) {
      _username.setValidators([
        Validators.required,
        (control: AbstractControl): ValidationErrors | null => {
          if (!control.value) return null;

          if (this.findUserCB(control.value)) {
            return { userFound: true };
          }

          return null;
        },
      ]);

      _username.valueChanges.subscribe(() => {
        if (_username.hasError('required'))
          this.usernameErrorMessage = this.errorMessages['required'];
        else if (_username.hasError('userFound'))
          this.usernameErrorMessage = this.errorMessages['userFound'];
        else this.usernameErrorMessage = '';
      });
    }

    if (_password) {
      _password.valueChanges.subscribe(() => {
        _password.valueChanges.subscribe(() => {
          if (_password.hasError('required'))
            this.passwordErrorMessage = this.errorMessages['required'];
          else this.passwordErrorMessage = '';
        });
      });
    }

    if (_confirmPassword) {
      if (_password) {
        _confirmPassword.setValidators([
          Validators.required,
          passwordMatchValidator(_password),
        ]);
      }
      _confirmPassword.valueChanges.subscribe(() => {
        if (_confirmPassword.hasError('required'))
          this.confirmPasswordErrorMessage = this.errorMessages['required'];
        else if (_confirmPassword.hasError('match'))
          this.confirmPasswordErrorMessage = this.errorMessages['match'];
        else this.confirmPasswordErrorMessage = '';
      });
    }
  }
}
