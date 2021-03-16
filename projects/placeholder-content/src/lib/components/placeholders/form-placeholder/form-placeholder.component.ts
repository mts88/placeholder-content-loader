import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PlaceholderComponent } from './../placeholder.component';

@Component({
  selector: 'mts-form-placeholder',
  template: `
    <mts-placeholder-container
      [theme]="theme"
      [containerClass]="classOfContainer()"
    >
      <content-loader
        [viewBox]="'0 0 200 100'"
        [speed]="speed"
        [animate]="animate"
        [backgroundColor]="placeholderSchema.background"
        [foregroundColor]="placeholderSchema.foreground"
        [baseUrl]="baseUri"
      >
        <svg:rect x="10" y="3" rx="2" ry="2" width="35" height="5" />
        <svg:rect x="85" y="3" rx="2" ry="2" width="50" height="5" />

        <svg:rect x="10" y="10" rx="2" ry="2" width="65" height="14" />
        <svg:rect x="85" y="10" rx="2" ry="2" width="105" height="14" />

        <svg:rect x="10" y="33" rx="2" ry="2" width="50" height="5" />

        <svg:rect x="10" y="40" rx="2" ry="2" width="90" height="14" />
        <svg:rect x="102" y="40" rx="2" ry="2" width="10" height="14" />

        <svg:rect x="10" y="65" rx="2" ry="2" width="10" height="10" />
        <svg:rect x="25" y="67.5" rx="2" ry="2" width="50" height="5" />

        <svg:rect x="150" y="80" rx="8" ry="8" width="40" height="16" />
      </content-loader>
    </mts-placeholder-container>
  `,
  styleUrls: ['./form-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPlaceholderComponent extends PlaceholderComponent {}
