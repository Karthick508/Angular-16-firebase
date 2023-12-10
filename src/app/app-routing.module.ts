import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'first', loadChildren : ()=> import('./modules/first-module/first-module.module').then(fm=>fm.FirstModuleModule)},
  {path : 'second', loadChildren : ()=> import('./modules/second-module/second-module.module').then(sm=>sm.SecondModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
