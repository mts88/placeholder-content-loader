import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
} from '@angular/core';

import { ColorScheme, ThemeSchema } from '../../models/color';
import { PlaceholderContentConfig } from './../../placeholder-content.config';

/**
 * Placeholder for Card
 */
@Component({
  selector: 'mts-card-placeholder',
  template: `
    <div
      class="card-container"
      [ngClass]="{
        'card-container--dark': theme === 'dark',
        'card-container--light': theme === 'light'
      }"
    >
      <content-loader
        [viewBox]="'0 0 200 60'"
        [speed]="speed"
        [animate]="animate"
        [backgroundColor]="placeholderSchema.background"
        [foregroundColor]="placeholderSchema.foreground"
        [baseUrl]="baseUri"
      >
        <svg:rect x="10" y="1" rx="2" ry="2" width="80" height="14" />
        <svg:rect x="10" y="20" rx="2" ry="2" width="150" height="8" />
        <svg:rect x="10" y="40" rx="8" ry="8" width="40" height="16" />
        <svg:circle cx="165" cy="50" r="8" />
        <svg:circle cx="185" cy="50" r="8" />
      </content-loader>
    </div>
  `,
  styleUrls: ['./card-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaceholderComponent {
  /**
   * If animate placeholder
   */
  @Input()
  animate = true;

  /**
   * Theme to use
   */
  @Input()
  theme: ThemeSchema = 'dark';

  /**
   * Create color scheme
   */
  get placeholderSchema(): ColorScheme {
    return this.theme === 'dark'
      ? this.config.colorScheme.DARK
      : this.config.colorScheme.LIGHT;
  }

  /**
   * Speed of animation
   */
  @Input()
  speed = 2;

  /**
   * Base uri fix for placeholder (safari fix)
   */
  baseUri = window.location.pathname;

  /**
   * @ignore
   */
  constructor(@Optional() private config?: PlaceholderContentConfig) {}
}
