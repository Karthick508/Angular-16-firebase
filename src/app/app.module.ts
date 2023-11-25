import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1CompComponent } from './firstModule/components/test1-comp/test1-comp.component';
import { FirstModuleServiceService } from './firstModule/service/first-module-service.service';

@NgModule({
  declarations: [
    AppComponent,
    Test1CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirstModuleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
