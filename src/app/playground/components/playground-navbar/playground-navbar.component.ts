import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { SVGIcon, menuIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-playground-navbar',
  standalone: true,
  imports: [AppBarModule, IconsModule, RouterLink, ButtonsModule],
  templateUrl: './playground-navbar.component.html',
  styleUrl: './playground-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundNavbarComponent {
  @Input() expanded: boolean = false;
  @Output() toggleEvent = new EventEmitter<boolean>();

  public menuIcon: SVGIcon = menuIcon;

  toggleExpanded(value: boolean) {
    this.toggleEvent.emit(!value);
  }
}
