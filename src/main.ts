/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// create custom element without bootstrap
// const custom_Element_tag = 'cus-elem';
// createApplication().then((appRef)=>{
//  const elementContr = createCustomElement(AppComponent,{ injector : appRef.injector});
//   // check custom element already exist
//   if (!customElements.get(custom_Element_tag)) {
//     customElements.define(custom_Element_tag,elementContr);
//     console.log(`Custom Element ${custom_Element_tag} Created.`);
    
//   } else {
    
//   }
// })
