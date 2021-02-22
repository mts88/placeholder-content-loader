export interface ColorScheme {
  readonly background: string;
  readonly foreground: string;
}

export interface PlaceHolderColor {
  readonly DARK: ColorScheme;
  readonly LIGHT: ColorScheme;
}

export type ThemeSchema = 'dark' | 'light';
