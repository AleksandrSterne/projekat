import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonsOverviewComponent } from '../../components/buttons-overview/buttons-overview.component';

@Component({
  selector: 'app-buttons-page',
  standalone: true,
  imports: [ButtonsOverviewComponent],
  templateUrl: './buttons-page.component.html',
  styleUrl: './buttons-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsPageComponent {

}
