import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfExampleComponent } from './pdf-example/pdf-example.component';
import { PdfExampleHtml2camvasComponent } from './pdf-example-html2camvas/pdf-example-html2camvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfExampleComponent,
    PdfExampleHtml2camvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
