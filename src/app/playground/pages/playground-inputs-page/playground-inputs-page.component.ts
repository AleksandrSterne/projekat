import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playground-inputs-page',
  standalone: true,
  imports: [],
  templateUrl: './playground-inputs-page.component.html',
  styleUrl: './playground-inputs-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundInputsPageComponent {}
