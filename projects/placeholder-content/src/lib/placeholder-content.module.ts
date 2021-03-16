import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ContentLoaderModule } from '@ngneat/content-loader';

import { PlaceholderContainerComponent } from './components/placeholder-container/placeholder-container.component';
import { CardPlaceholderComponent } from './components/placeholders/card-placeholder/card-placeholder.component';
import { FormPlaceholderComponent } from './components/placeholders/form-placeholder/form-placeholder.component';
import { InfoColumnPlaceholderComponent } from './components/placeholders/info-column-placeholder/info-column-placeholder.component';
import { PlaceholderComponent } from './components/placeholders/placeholder.component';
import { TablePlaceholderComponent } from './components/placeholders/table-placeholder/table-placeholder.component';
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
    PlaceholderContainerComponent,
    FormPlaceholderComponent,
  ],
  imports: [CommonModule, ContentLoaderModule],
  exports: [
    CardPlaceholderComponent,
    InfoColumnPlaceholderComponent,
    TablePlaceholderComponent,
    FormPlaceholderComponent,
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
