import { ChangeDetectorRef } from '@angular/core';
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

    if (!control.value) return null;

    if (control.value !== passwordControl.value) return { match: true };

    return null;
  };
}

export class RegisterFormGroup extends FormGroup {
  public cdr: ChangeDetectorRef | null = null;
  public findUserCB: (username: string) => boolean = (
    username: string
  ): boolean => {
    return false;
  };

  public get usernameCtrl(): FormControl {
    return this.get('username') as any;
  }

  public get passwordCtrl(): FormControl {
    return this.get('password') as any;
  }

  public get confirmPasswordCtrl(): FormControl {
    return this.get('confirmPassword') as any;
  }

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
    }

    if (_password && _confirmPassword) {
      _confirmPassword.setValidators([
        Validators.required,
        passwordMatchValidator(_password),
      ]);

      _password.valueChanges.subscribe(() => {
        _confirmPassword.updateValueAndValidity();

        if (this.cdr) {
          this.cdr.markForCheck();
        }
      });
    }
  }
}
