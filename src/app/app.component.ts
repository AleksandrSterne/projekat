import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'projekat';

  constructor(
    private _userService: UserService,
    private _loginService: LoginService
  ) {
    const token = localStorage.getItem('token');

    if (token) {
      const foundUser = this._userService.findUserById(+token);

      if (foundUser) this._loginService.setCurrentUser(foundUser);
    }
  }
}
