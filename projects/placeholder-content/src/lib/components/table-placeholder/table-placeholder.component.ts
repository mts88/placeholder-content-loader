import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PlaceholderComponent } from './../placeholder.component';

/**
 * Placeholder for table
 */
@Component({
  selector: 'mts-table-placeholder',
  template: `
    <mts-placeholder-container [theme]="theme">
      <content-loader
        [viewBox]="'0 0 100 40'"
        [speed]="speed"
        [animate]="animate"
        [backgroundColor]="placeholderSchema.background"
        [foregroundColor]="placeholderSchema.foreground"
        [baseUrl]="baseUri"
      >
        <!-- thead -->
        <svg:rect x="15" y="1.5" rx="1" ry="1" width="10" height="3.5" />
        <svg:rect x="37" y="1.5" rx="1" ry="1" width="20" height="3.5" />
        <svg:rect x="70" y="1.5" rx="1" ry="1" width="10" height="3.5" />
        <svg:rect x="5" y="6" rx="1" ry="1" width="90" height="0.5" />
        <!-- tbody -->
        <svg:rect x="5" y="8.5" rx="1" ry="1" width="5" height="2.5" />
        <svg:rect x="13" y="8.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="30" y="8.5" rx="1" ry="1" width="35" height="2.5" />
        <svg:rect x="68" y="8.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="85" y="8.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="90" y="8.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="5" y="12.5" rx="1" ry="1" width="90" height="0.5" />

        <svg:rect x="5" y="14.5" rx="1" ry="1" width="5" height="2.5" />
        <svg:rect x="13" y="14.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="30" y="14.5" rx="1" ry="1" width="35" height="2.5" />
        <svg:rect x="68" y="14.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="85" y="14.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="90" y="14.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="5" y="18.5" rx="1" ry="1" width="90" height="0.5" />

        <svg:rect x="5" y="20.5" rx="1" ry="1" width="5" height="2.5" />
        <svg:rect x="13" y="20.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="30" y="20.5" rx="1" ry="1" width="35" height="2.5" />
        <svg:rect x="68" y="20.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="85" y="20.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="90" y="20.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="5" y="24.5" rx="1" ry="1" width="90" height="0.5" />

        <svg:rect x="5" y="26.5" rx="1" ry="1" width="5" height="2.5" />
        <svg:rect x="13" y="26.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="30" y="26.5" rx="1" ry="1" width="35" height="2.5" />
        <svg:rect x="68" y="26.5" rx="1" ry="1" width="15" height="2.5" />
        <svg:rect x="85" y="26.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="90" y="26.5" rx="1" ry="1" width="2.5" height="2.5" />
        <svg:rect x="5" y="30.5" rx="1" ry="1" width="90" height="0.5" />
        <!-- footer -->
        <svg:rect x="80" y="33.5" rx="1" ry="1" width="15" height="3.5" />
      </content-loader>
    </mts-placeholder-container>
  `,
  styleUrls: ['./table-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePlaceholderComponent extends PlaceholderComponent {}
