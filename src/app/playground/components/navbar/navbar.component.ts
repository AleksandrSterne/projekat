import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { AppBarModule } from '@progress/kendo-angular-navigation';
import { SVGIcon, menuIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppBarModule, IconsModule, RouterLink, ButtonsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public menuIcon: SVGIcon = menuIcon;
}
