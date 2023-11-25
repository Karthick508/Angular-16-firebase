import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1CompComponent } from './firstModule/components/test1-comp/test1-comp.component';

const routes: Routes = [
  {path : 'abc', component : Test1CompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
