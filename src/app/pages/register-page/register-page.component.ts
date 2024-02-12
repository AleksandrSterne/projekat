import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { RegisterFormGroup } from '../../components/register/register.form';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  formRef: RegisterFormGroup = new RegisterFormGroup();

  constructor(
    private _userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.formRef.findUserCB = (username: string): boolean => {
      return !!this._userService.findUser(username);
    };
  }

  submitRegistration(event: Event) {
    event.preventDefault();

    this.formRef.markAllAsTouched();

    this.cdr.detectChanges();

    if (this.formRef.cdr) {
      this.formRef.cdr.detectChanges();
    }

    if (this.formRef.invalid) return;

    this._userService.register(
      this.formRef.value.username,
      this.formRef.value.password
    );

    alert('Registered sucessfully!');
  }
}
