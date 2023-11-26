import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleComponentComponent } from './components/first-module-component/first-module-component.component';
import { userListResolverResolver } from './resolver/user-list-resolver.resolver';

const routes: Routes = [
  {
    path:"" ,
    component : FirstModuleComponentComponent,
    resolve : {
      data : userListResolverResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
