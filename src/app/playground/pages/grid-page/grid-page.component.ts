import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridOverviewComponent } from '../../components/grid-overview/grid-overview.component';

@Component({
  selector: 'app-grid-page',
  standalone: true,
  imports: [GridOverviewComponent],
  templateUrl: './grid-page.component.html',
  styleUrl: './grid-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPageComponent {

}
