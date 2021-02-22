import { InjectionToken } from '@angular/core';

import { PlaceHolderColor, ThemeSchema } from './models/color';

/**
 * PlaceholderContent Configuration
 */
export interface PlaceholderContentConfig {
  theme: ThemeSchema;
  colorScheme: PlaceHolderColor;
}

/**
 * Default color scheme
 */
const PlaceholderColorScheme: PlaceHolderColor = {
  DARK: {
    background: '#333333',
    foreground: '#373737',
  },
  LIGHT: {
    background: '#eeeeee',
    foreground: '#e3e3e3',
  },
};

/**
 * Default Placeholder configs
 */
export const DEFAULT_CONFIG: PlaceholderContentConfig = {
  theme: 'dark',
  colorScheme: PlaceholderColorScheme,
};

export const MODULE_CONFIG = new InjectionToken<PlaceholderContentConfig>(
  'MODULE_CONFIG',
);
