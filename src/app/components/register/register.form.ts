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

    if (control.value !== passwordControl.value)
      return { match: true };

    return null;
  };
}

@Injectable()
export class RegisterFormGroup extends FormGroup {
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

    if (_password && _confirmPassword) {
      _password.valueChanges.subscribe(() => {
        _confirmPassword.updateValueAndValidity();
      });

      _confirmPassword.setValidators([
        Validators.required,
        passwordMatchValidator(_password),
      ]);
    }

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
    }
  }
}
