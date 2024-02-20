import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  DateInputsModule,
  FormatSettings,
  PopupSettings,
} from '@progress/kendo-angular-dateinputs';
import { Day } from '@progress/kendo-date-math';

@Component({
  selector: 'app-playground-date-inputs-page',
  standalone: true,
  imports: [DateInputsModule],
  templateUrl: './playground-date-inputs-page.component.html',
  styleUrl: './playground-date-inputs-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundDateInputsPageComponent {
  public value: Date = new Date(2024, 1, 2);
  // public disabledDate: Day[] = [Day.Wednesday];
  public disabledDates = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  };
  public min: Date = new Date(2024, 1, 10);
  public max: Date = new Date(2024, 1, 20);
  public steps: any = { year: 10, day: 5, hour: 2, minute: 15 };
  public twoDigitYearMax = 30;
  public format: FormatSettings = {
    displayFormat: 'dd/MM/yyyy',
    inputFormat: 'dd/MM/yy',
  };
  public shortFormat = 'dd/MM/yy';
  public popupSettings: PopupSettings = {
    appendTo: 'component',
    animate: false,
    popupClass: 'crimson',
  };
  public range = { start: new Date(), end: new Date() };

  public onChange(value: Date[]): void {
    console.log(value);
  }
}
