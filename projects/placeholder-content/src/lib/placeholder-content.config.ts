import { ThemeSchema } from 'src/app/shared/models/theme';

import { PlaceHolderColor } from './models/color';

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
 * Placeholder configs
 */
export class PlaceholderContentConfig {
  theme: ThemeSchema = 'dark';
  colorScheme: PlaceHolderColor = PlaceholderColorScheme;
}
