import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-module-component',
  templateUrl: './first-module-component.component.html',
  styleUrls: ['./first-module-component.component.scss']
})
export class FirstModuleComponentComponent {

    constructor(private route : ActivatedRoute){
      debugger
      const resolverData = this.route.data;
      resolverData.subscribe({
        next : (value)=>{
          console.log("resolverData in component",value['data']);
        }
      })
    }

}
