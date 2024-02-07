import { Component } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { RegisterFormGroup } from '../../components/register/register.form';
import { RegisterService } from '../../services/register.service';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  registerForm = new RegisterFormGroup();

  constructor(
    private _registerService: RegisterService,
    private _userService: UserService
  ) {}

  submitRegistration(event: Event) {
    event.preventDefault();

    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) return;

    const registerFormValue = this.registerForm.value;

    if (this._userService.findUser(registerFormValue.username)) {
      alert('The username already exists.');

      return;
    }

    if (
      !this._registerService.checkIfPasswordsAreMatching(
        registerFormValue.password,
        registerFormValue.confirmPassword
      )
    ) {
      alert("Password doesn't match");

      return;
    }

    const credentials = {
      username: registerFormValue.username,
      password: registerFormValue.password,
    };

    this._registerService.register(credentials);

    alert('Registered sucessfully!');
  }
}
