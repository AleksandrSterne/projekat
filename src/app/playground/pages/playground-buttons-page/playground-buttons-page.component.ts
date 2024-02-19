import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonsModule, DialItem } from '@progress/kendo-angular-buttons';
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import {
  SVGIcon,
  alignCenterIcon,
  alignJustifyIcon,
  alignLeftIcon,
  alignRightIcon,
  anchorIcon,
  boldIcon,
  calendarIcon,
  cartIcon,
  codeIcon,
  envelopeIcon,
  facebookIcon,
  fileTxtIcon,
  folderIcon,
  italicIcon,
  linkedinIcon,
  redditIcon,
  shareIcon,
  twitterIcon,
  underlineIcon,
} from '@progress/kendo-svg-icons';

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
  public cartSVG: SVGIcon = cartIcon;
  public codeSVG: SVGIcon = codeIcon;
  public anchorSVG: SVGIcon = anchorIcon;
  public boldSVG: SVGIcon = boldIcon;
  public italicSVG: SVGIcon = italicIcon;
  public underlineSVG: SVGIcon = underlineIcon;
  public alignLeftSVG: SVGIcon = alignLeftIcon;
  public alignCenterSVG: SVGIcon = alignCenterIcon;
  public alignRightSVG: SVGIcon = alignRightIcon;
  public alignJustifySVG: SVGIcon = alignJustifyIcon;
  public shareSVG: SVGIcon = shareIcon;
  public disabled = true;
  public dropdownData = [
    { text: 'My Profile' },
    { text: 'Friend Requests' },
    { text: 'Account Settings' },
    { text: 'Support' },
    { text: 'Log Out' },
  ];
  public shareData = [
    {
      text: 'Facebook',
      svgIcon: facebookIcon,
    },
    {
      text: 'Twitter',
      svgIcon: twitterIcon,
    },
    {
      text: 'Linkedin',
      svgIcon: linkedinIcon,
    },
    {
      text: 'Reddit',
      svgIcon: redditIcon,
      disabled: true,
    },
  ];
  public dialItems: Array<DialItem> = [
    { svgIcon: envelopeIcon, label: 'Email', disabled: true },
    { svgIcon: calendarIcon, label: 'Event' },
    { svgIcon: fileTxtIcon, label: 'Note' },
  ];

  onClick() {
    console.log('Clicked!');
  }
}
