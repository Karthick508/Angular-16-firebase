import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleComponentComponent } from './first-module-component/first-module-component.component';

const routes: Routes = [
  {path:"" ,component : FirstModuleComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
