import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleCompComponent } from './second-module-comp/second-module-comp.component';


@NgModule({
  declarations: [
    SecondModuleCompComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
