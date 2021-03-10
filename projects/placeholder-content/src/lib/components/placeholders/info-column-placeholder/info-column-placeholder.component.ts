import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PlaceholderComponent } from '../placeholder.component';

/**
 * Placeholder for info column
 */
@Component({
  selector: 'mts-info-column-placeholder',
  template: `
    <mts-placeholder-container
      [theme]="theme"
      [containerClass]="classOfContainer()"
    >
      <content-loader
        [viewBox]="'0 0 200 80'"
        [speed]="speed"
        [animate]="animate"
        [backgroundColor]="placeholderSchema.background"
        [foregroundColor]="placeholderSchema.foreground"
        [baseUrl]="baseUri"
      >
        <!-- First title and subtitle -->
        <svg:rect x="10" y="3" rx="2" ry="2" width="80" height="10" />
        <svg:rect x="10" y="16" rx="2" ry="2" width="150" height="6" />
        <!-- Second title -->
        <svg:rect x="10" y="33" rx="2" ry="2" width="80" height="10" />
        <!-- Avatars / boxes -->
        <svg:rect x="10" y="47" rx="2" ry="2" width="30" height="30" />
        <svg:rect x="45" y="47" rx="2" ry="2" width="30" height="30" />
        <svg:rect x="80" y="47" rx="2" ry="2" width="30" height="30" />
        <svg:rect x="115" y="47" rx="2" ry="2" width="30" height="30" />
        <svg:rect x="150" y="47" rx="2" ry="2" width="30" height="30" />
      </content-loader>
    </mts-placeholder-container>
  `,
  styleUrls: ['./info-column-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoColumnPlaceholderComponent extends PlaceholderComponent {}
