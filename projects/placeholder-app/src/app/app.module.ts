import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlaceholderContentModule } from './../../../placeholder-content/src/lib/placeholder-content.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceholderContentModule.forRoot({
      theme: 'dark',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
