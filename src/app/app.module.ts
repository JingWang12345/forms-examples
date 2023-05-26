import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlFormComponent } from './html-form/html-form.component';
import { JsFormComponent } from './js-form/js-form.component';
import { AngularFormComponent } from './angular-form/angular-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HtmlFormComponent,
    JsFormComponent,
    AngularFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
