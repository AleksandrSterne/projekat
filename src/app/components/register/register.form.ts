import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable()
export class RegisterFormGroup extends FormGroup {
  constructor() {
    super({
      username: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required]),
      confirmPassword: new FormControl<string>('', [Validators.required]),
    });

    function createPasswordValidator(
      passwordToMatch: AbstractControl | null
    ): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        if (!control || !passwordToMatch) return { invalidPassword: true };

        if (control.value !== passwordToMatch.value)
          return { invalidPassword: true };

        return null;
      };
    }

    const password = this.get('password');
    const confirmPassword = this.get('password');

    if (password && confirmPassword) {
      password.addValidators(createPasswordValidator(confirmPassword));
      confirmPassword.addValidators(createPasswordValidator(password));
    }
  }
}
