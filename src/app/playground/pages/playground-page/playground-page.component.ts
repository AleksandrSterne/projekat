import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrl: './playground-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundPageComponent {
  expanded: boolean = false;

  toggleExpanded(value: boolean) {
    this.expanded = value;
  }
}
