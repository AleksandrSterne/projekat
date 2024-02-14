import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountInfoComponent } from '../../components/account-info/account-info.component';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { User } from '../../services/user.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [AccountInfoComponent, AsyncPipe, RouterLink],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
  currentUser$: Observable<User | null> = this._loginService.currentUser$;

  constructor(private _loginService: LoginService) {}

  logout() {
    this._loginService.logout();
  }
}
