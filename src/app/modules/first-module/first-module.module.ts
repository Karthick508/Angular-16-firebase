import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstModuleComponentComponent } from './first-module-component/first-module-component.component';


@NgModule({
  declarations: [
    FirstModuleComponentComponent
  ],
  imports: [
    CommonModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
