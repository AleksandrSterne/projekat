import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../services/user.model';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountInfoComponent {
  @Input() data!: User | null;
}
