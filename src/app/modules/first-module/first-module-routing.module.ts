import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleComponentComponent } from './components/first-module-component/first-module-component.component';
import { userListResolverResolver } from './resolver/user-list-resolver.resolver';
import { RendererTestCompComponent } from './components/first-module-component/renderer-test-comp/renderer-test-comp.component';

const routes: Routes = [
  {
    path:"" ,
    component : FirstModuleComponentComponent,
    resolve : {
      data : userListResolverResolver
    },
  },{
    path : "render",
    component : RendererTestCompComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
