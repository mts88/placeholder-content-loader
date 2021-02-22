import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { CardPlaceholderComponent } from './components/card-placeholder/card-placeholder.component';
import { InfoColumnPlaceholderComponent } from './components/info-column-placeholder/info-column-placeholder.component';
import { PlaceholderComponent } from './components/placeholder.component';
import { TablePlaceholderComponent } from './components/table-placeholder/table-placeholder.component';
import {
  DEFAULT_CONFIG,
  MODULE_CONFIG,
  PlaceholderContentConfig,
} from './placeholder-content.config';

@NgModule({
  declarations: [
    PlaceholderComponent,
    CardPlaceholderComponent,
    InfoColumnPlaceholderComponent,
    TablePlaceholderComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
  exports: [
    CardPlaceholderComponent,
    InfoColumnPlaceholderComponent,
    TablePlaceholderComponent,
  ],
})
export class PlaceholderContentModule {
  static forRoot(
    config: Partial<PlaceholderContentConfig>,
  ): ModuleWithProviders<PlaceholderContentModule> {
    return {
      ngModule: PlaceholderContentModule,
      providers: [
        { provide: MODULE_CONFIG, useValue: { ...DEFAULT_CONFIG, ...config } },
      ],
    };
  }
}
