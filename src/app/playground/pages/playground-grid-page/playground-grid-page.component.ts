import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playground-grid-page',
  standalone: true,
  imports: [],
  templateUrl: './playground-grid-page.component.html',
  styleUrl: './playground-grid-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundGridPageComponent {}
