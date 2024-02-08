import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { RegisterFormGroup } from '../../components/register/register.form';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  registerForm: RegisterFormGroup = new RegisterFormGroup();
  usernameErrorMessage = '';
  passwordErrorMessage = '';
  confirmPasswordErrorMessage = '';

  constructor(
    private _userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.registerForm.findUserCB = (username: string): boolean => {
      return !!this._userService.findUser(username);
    };

    this.registerForm.valueChanges.subscribe(() => {
      this.setErrorMessages();
    });
  }

  setErrorMessages() {
    this.usernameErrorMessage = this.registerForm.usernameErrorMessage;
    this.passwordErrorMessage = this.registerForm.passwordErrorMessage;
    this.confirmPasswordErrorMessage =
      this.registerForm.confirmPasswordErrorMessage;
  }

  submitRegistration(event: Event) {
    event.preventDefault();

    this.registerForm.markAllAsTouched();

    const registerForm = this.registerForm;

    this.setErrorMessages();

    this.cdr.detectChanges();

    if (this.registerForm.invalid) return;

    this._userService.register(
      registerForm.value.username,
      registerForm.value.password
    );

    alert('Registered sucessfully!');
  }
}
