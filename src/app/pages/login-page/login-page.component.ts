import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../../components/form/form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup = new LoginForm();
}
