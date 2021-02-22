import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { PlaceholderContentConfig } from './placeholder-content.config';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContentLoaderModule],
  exports: [],
})
export class PlaceholderContentModule {
  static forRoot(
    config: PlaceholderContentConfig,
  ): ModuleWithProviders<PlaceholderContentModule> {
    return {
      ngModule: PlaceholderContentModule,
      providers: [{ provide: PlaceholderContentConfig, useValue: config }],
    };
  }
}
