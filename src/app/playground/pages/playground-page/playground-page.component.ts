import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PlaygroundModule } from '../../playground.module';

@Component({
  selector: 'app-playground-page',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PlaygroundModule],
  templateUrl: './playground-page.component.html',
  styleUrl: './playground-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundPageComponent {}
