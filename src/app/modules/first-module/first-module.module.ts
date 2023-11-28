import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleComponentComponent } from './components/first-module-component/first-module-component.component';
import { RendererTestCompComponent } from './components/first-module-component/renderer-test-comp/renderer-test-comp.component';
import { RedClrDirDirective } from './directives/red-clr-dir.directive';


@NgModule({
  declarations: [
    FirstModuleComponentComponent,
    RendererTestCompComponent,
    RedClrDirDirective
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
