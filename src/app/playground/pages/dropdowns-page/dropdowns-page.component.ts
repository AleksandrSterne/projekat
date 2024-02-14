import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownsOverviewComponent } from '../../components/dropdowns-overview/dropdowns-overview.component';

@Component({
  selector: 'app-dropdowns-page',
  standalone: true,
  imports: [DropdownsOverviewComponent],
  templateUrl: './dropdowns-page.component.html',
  styleUrl: './dropdowns-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownsPageComponent {

}
