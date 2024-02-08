import { Component } from '@angular/core';
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
})
export class RegisterPageComponent {
  registerForm = new RegisterFormGroup();

  constructor(private _userService: UserService) {}

  submitRegistration(event: Event) {
    event.preventDefault();

    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) return;

    const registerFormValue = this.registerForm.value;

    if (this._userService.findUser(registerFormValue.username)) {
      alert('The username already exists.');

      return;
    }

    console.log(this.registerForm);

    this._userService.register(
      registerFormValue.username,
      registerFormValue.password
    );

    alert('Registered sucessfully!');
  }
}
