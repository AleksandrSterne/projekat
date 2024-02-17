import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { SVGIcon, folderIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-playground-buttons-page',
  standalone: true,
  imports: [AutoCompleteModule, ButtonsModule],
  templateUrl: './playground-buttons-page.component.html',
  styleUrl: './playground-buttons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundButtonsPageComponent {
  public folderSVG: SVGIcon = folderIcon;

  onClick() {
    console.log('Clicked!');
  }
}
