import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PlaceholderComponent } from './../placeholder.component';

/**
 * Placeholder for Card
 */
@Component({
  selector: 'mts-card-placeholder',
  template: `
    <mts-placeholder-container [theme]="theme">
      <content-loader
        [viewBox]="'0 0 200 60'"
        [speed]="speed"
        [animate]="animate"
        [backgroundColor]="placeholderSchema.background"
        [foregroundColor]="placeholderSchema.foreground"
        [baseUrl]="baseUri"
      >
        <svg:rect x="10" y="3" rx="2" ry="2" width="80" height="14" />
        <svg:rect x="10" y="20" rx="2" ry="2" width="150" height="8" />
        <svg:rect x="10" y="40" rx="8" ry="8" width="40" height="16" />
        <svg:circle cx="165" cy="50" r="8" />
        <svg:circle cx="185" cy="50" r="8" />
      </content-loader>
    </mts-placeholder-container>
  `,
  styleUrls: ['./card-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaceholderComponent extends PlaceholderComponent {}
