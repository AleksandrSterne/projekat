import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  constructor(
    private _loginService: LoginService,
    private _userService: UserService
  ) {
    this.loginForm.findUserCB = (username: string): boolean => {
      return !!this._userService.findUser(username);
    };
  }

  submitLogin(event: Event) {
    event.preventDefault();

    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) return;

    if (!this._loginService.withCredentials(this.loginForm.value)) {
      alert('Wrong credentials.');

      return;
    }

    alert('Sucessfull login!');
  }
}
