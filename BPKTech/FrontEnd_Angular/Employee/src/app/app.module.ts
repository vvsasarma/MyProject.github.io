import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebApiClientComponent } from './web-api-client.component';

@NgModule({
  declarations: [
    AppComponent,
    WebApiClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WebApiClientComponent]
})
export class AppModule { }
