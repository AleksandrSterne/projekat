import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../services/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountInfoComponent {
  @Input() currentUser$!: Observable<User | null>;
}
