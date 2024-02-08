import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  registerForm = new RegisterFormGroup();

  constructor(private _userService: UserService) {}

  submitRegistration(event: Event) {
    event.preventDefault();

    this.registerForm.markAllAsTouched();

    const registerForm = this.registerForm;

    if (this.registerForm.invalid) {
      if (this._userService.findUser(registerForm.value.username)) {
        alert('The username already exists.');
  
        return;
      }

      if (registerForm.controls['confirmPassword'].invalid) {
        alert('Passwords do not match.');

        return;
      }
    }

    this._userService.register(
      registerForm.value.username,
      registerForm.value.password
    );

    alert('Registered sucessfully!');
  }
}
