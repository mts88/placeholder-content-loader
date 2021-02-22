import { Component, Inject, Input, Optional } from '@angular/core';

import { ColorScheme, ThemeSchema } from '../models/color';
import { MODULE_CONFIG } from '../placeholder-content.config';

@Component({
  selector: 'mts-placeholder-component',
  template: ``,
  styles: [],
})
export class PlaceholderComponent {
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
  constructor(@Optional() @Inject(MODULE_CONFIG) private config) {}
}
