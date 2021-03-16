# Placeholder Content Loader

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) [![CircleCI](https://circleci.com/gh/mts88/placeholder-content-loader.svg?style=shield)](https://circleci.com/gh/mts88/placeholder-content-loader) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![GitHub release](https://img.shields.io/github/release/mts88/placeholder-content-loader.svg)](https://GitHub.com/mts88/placeholder-content-loader/releases/) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

This library is a simple collection of placeholder components, realized with the library [ngneat/content-loader](https://github.com/ngneat/content-loader).

## Installation

In order to install:

```shell
npm install --save placeholder-content
```

## How to use it?

Import the module `PlaceholderContentModule` where do you need:

```typescript
import {
  PlaceholderContentModule,
  PlaceHolderColor,
} from 'placeholder-content';

const placeholderColorScheme: PlaceHolderColor = {
  DARK: {
    background: '#333333',
    foreground: '#373737',
  },
  LIGHT: {
    background: '#eeeeee',
    foreground: '#e3e3e3',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceholderContentModule.forRoot({
      theme: 'dark',
      colorScheme: placeholderColorScheme,
    }),
    // other imports...
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Usage

In your html use component:

```html
<div>
  <mts-card-placeholder
    [theme]="'light'"
    [animate]="true"
    [speed]="2"
    [containerClass]="['custom-class-for-container']"
  ></mts-card-placeholder>
  <div></div>
</div>
```

You can use these input for each component:
| Name | Type | Description |
|--|--| -- |
| theme | `ThemeSchema` | Theme of single placeholder (override global config). <br> _Default_: `'dark'` |
| animate | `boolean` | Animation of placeholder. <br> _Default_: `true` |
| speed | `number` | Speed of animation. <br> _Default_: `2`
| containerClass | `string` or `Array<string>` | Custom classes for placeholder container. <br> _Default_: `[]`

## Components

List of components:

- [Card](#card)
- [Form](#form)
- [Info](#info)
- [Table](#table)

### Card

![Card placeholder](https://mts88.github.com/placeholder-content-loader/card.jpg)

```html
<div>
  <mts-card-placeholder></mts-card-placeholder>
</div>
```

### Form

![Form placeholder](https://mts88.github.com/placeholder-content-loader/form.jpg)

```html
<div>
  <mts-form-placeholder></mts-form-placeholder>
</div>
```

### Info

![Info placeholder](https://mts88.github.com/placeholder-content-loader/info.jpg)

```html
<div>
  <mts-info-column-placeholder></mts-info-column-placeholder>
</div>
```

### Table

![Table placeholder](https://mts88.github.com/placeholder-content-loader/table.jpg)

```html
<div>
  <mts-table-placeholder></mts-table-placeholder>
</div>
```

## Compatibility

- `@angular/core`: `^11.0.0` (not tested with 9 and 10)

## Credits

[ngneat/content-loader](https://github.com/ngneat/content-loader)

## License

MIT
