import { Component, Input } from '@angular/core';

import { ThemeSchema } from '../../models/color';

@Component({
  selector: 'mts-placeholder-container',
  template: `
    <div
      class="placeholder__container"
      [ngClass]="{
        'placeholder__container--dark': theme === 'dark',
        'placeholder__container--light': theme === 'light'
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./placeholder-container.component.scss'],
})
export class PlaceholderContainerComponent {
  @Input()
  theme: ThemeSchema = 'dark';
}
