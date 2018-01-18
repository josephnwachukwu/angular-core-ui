/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularCoreUIModule }  from 'angular-core-ui';

@Component({
  selector: 'app',
  templateUrl: `./app.component.html`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AngularCoreUIModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
