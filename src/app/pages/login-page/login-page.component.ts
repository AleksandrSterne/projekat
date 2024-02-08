import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { LoginFormGroup } from '../../components/login/login.form';
import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  loginForm: LoginFormGroup = new LoginFormGroup();
  usernameErrorMessage = '';
  passwordErrorMessage = '';

  constructor(
    private _loginService: LoginService,
    private _userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.loginForm.findUserCB = (username: string): boolean => {
      return !!this._userService.findUser(username);
    };

    this.loginForm.valueChanges.subscribe(() => {
      this.setErrorMessages();
    });
  }

  setErrorMessages() {
    this.usernameErrorMessage = this.loginForm.usernameErrorMessage;
    this.passwordErrorMessage = this.loginForm.passwordErrorMessage;
  }

  submitLogin(event: Event) {
    event.preventDefault();

    this.loginForm.markAllAsTouched();

    this.setErrorMessages();

    this.cdr.detectChanges();

    if (this.loginForm.invalid) return;

    if (!this._loginService.withCredentials(this.loginForm.value))
      return alert('Wrong credentials.');

    alert('Sucessfull login!');
  }
}
