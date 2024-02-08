import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function createPasswordValidator(
  passwordControl: AbstractControl | null
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !passwordControl) return { invalidPassword: true };

    if (control.value !== passwordControl.value)
      return { invalidPassword: true };

    return null;
  };
}

@Injectable()
export class RegisterFormGroup extends FormGroup {
  constructor() {
    super({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    });

    this.controls['confirmPassword'].setValidators([
      Validators.required,
      createPasswordValidator(this.controls['password']),
    ]);
  }
}
