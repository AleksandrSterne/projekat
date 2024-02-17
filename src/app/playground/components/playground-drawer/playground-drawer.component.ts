import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DrawerModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-playground-drawer',
  standalone: true,
  imports: [DrawerModule],
  templateUrl: './playground-drawer.component.html',
  styleUrl: './playground-drawer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundDrawerComponent {
  @Input() expanded: boolean = false;

  items = [1, 2, 3, 4];
}
