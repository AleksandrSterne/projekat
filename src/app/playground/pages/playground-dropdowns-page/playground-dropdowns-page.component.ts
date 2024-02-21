import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GroupResult, groupBy } from '@progress/kendo-data-query';
import { storeProducts } from './store-products';
import {
  SVGIcon,
  copyIcon,
  mapMarkerIcon,
  searchIcon,
} from '@progress/kendo-svg-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-playground-dropdowns-page',
  standalone: true,
  imports: [DropDownsModule, ButtonsModule],
  templateUrl: './playground-dropdowns-page.component.html',
  styleUrl: './playground-dropdowns-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundDropdownsPageComponent {
  public filter: string = '';
  public areaList: Array<string> = [
    'Amsterdam',
    'Athens',
    'Barcelona',
    'Berlin',
    'Brussels',
    'Chicago',
    'Copenhagen',
    'Dublin',
    'Helsinki',
    'Houston',
    'Lisbon',
    'London',
    'Los Angeles',
    'Madrid',
    'Miami',
    'Montreal',
    'New York',
    'Paris',
    'Philadelphia',
    'Prague',
    'Rome',
    'Sao Paulo',
    'Seattle',
    'Stockholm',
    'Toronto',
    'Vancouver',
    'Vienna',
    'Vienna',
    'Warsaw',
  ];
  public city = 'Los Angeles';
  public data: Array<string>;
  public groupedData: GroupResult[] = groupBy(storeProducts, [
    { field: 'subcategory' },
  ]) as GroupResult[];
  public virtual: any = {
    itemHeight: 16,
  };
  public itemDisabled(itemArgs: { dataItem: string; index: number }): boolean {
    return itemArgs.index === 2;
  }
  public searchSVG: SVGIcon = searchIcon;
  public mapMarkerSVG: SVGIcon = mapMarkerIcon;
  public copySVG: SVGIcon = copyIcon;

  constructor() {
    this.data = this.areaList.slice();
  }

  handleFilter(value: string) {
    this.data = this.areaList.filter(
      (s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  addNew() {
    this.areaList.push(this.filter);

    this.handleFilter(this.filter);
  }
}
