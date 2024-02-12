import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { LoginFormGroup } from '../../components/login/login.form';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  formRef: LoginFormGroup = new LoginFormGroup();

  constructor(
    private _loginService: LoginService,
    private cdr: ChangeDetectorRef
  ) {}

  submitLogin(event: Event) {
    event.preventDefault();

    this.formRef.markAllAsTouched();

    this.cdr.detectChanges();

    if (this.formRef.cdr) {
      this.formRef.cdr.detectChanges();
    }

    if (this.formRef.invalid) return;

    if (!this._loginService.withCredentials(this.formRef.value))
      return alert('Wrong credentials.');

    alert('Sucessfull login!');
  }
}
