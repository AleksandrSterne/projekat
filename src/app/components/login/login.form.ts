import { ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginFormGroup extends FormGroup {
  public cdr: ChangeDetectorRef | null = null;

  public get usernameCtrl(): FormControl {
    return this.get('username') as any;
  }

  public get passwordCtrl(): FormControl {
    return this.get('password') as any;
  }

  constructor() {
    super({
      username: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', Validators.required),
    });
  }
}
