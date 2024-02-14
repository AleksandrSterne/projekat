import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputsOverviewComponent } from '../../components/inputs-overview/inputs-overview.component';

@Component({
  selector: 'app-inputs-page',
  standalone: true,
  imports: [InputsOverviewComponent],
  templateUrl: './inputs-page.component.html',
  styleUrl: './inputs-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputsPageComponent {

}
