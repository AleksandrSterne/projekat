import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateInputsOverviewComponent } from '../../components/date-inputs-overview/date-inputs-overview.component';

@Component({
  selector: 'app-date-inputs-page',
  standalone: true,
  imports: [DateInputsOverviewComponent],
  templateUrl: './date-inputs-page.component.html',
  styleUrl: './date-inputs-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputsPageComponent {

}
