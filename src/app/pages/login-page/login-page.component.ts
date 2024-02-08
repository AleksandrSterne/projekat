import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { FormGroup } from '@angular/forms';
import { LoginFormGroup } from '../../components/login/login.form';
import { LoginService } from '../../services/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  loginForm: FormGroup = new LoginFormGroup();

  constructor(private _loginService: LoginService) {}

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
