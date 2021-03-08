import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TetaDirective} from './teta.directive';
import {MinDirective} from './min.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TetaDirective,
    MinDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
