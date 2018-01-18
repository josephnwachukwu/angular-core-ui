import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCardModule } from './card/index'

@NgModule({
  imports: [
    CommonModule,
      CoreCardModule
  ],
  declarations: [
  ],
  exports: [
      CoreCardModule
  ]
})
export class AngularCoreUIModule {
  static forRoot() {
    return {
      ngModule: AngularCoreUIModule,
      providers: []
    };
  }
}
