import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondModuleCompComponent } from './second-module-comp/second-module-comp.component';

const routes: Routes = [
  {path : "" , component : SecondModuleCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleRoutingModule { }
