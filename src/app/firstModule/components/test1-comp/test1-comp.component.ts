import { Component, OnInit } from '@angular/core';
import { FirstModuleServiceService } from '../../service/first-module-service.service';

@Component({
  selector: 'app-test1-comp',
  templateUrl: './test1-comp.component.html',
  styleUrls: ['./test1-comp.component.scss']
})
export class Test1CompComponent implements OnInit{

  constructor(private service : FirstModuleServiceService){
    console.log("FirstModuleServiceService",service)
  }

  ngOnInit(){
    const button = document.addEventListener('click',()=>{
      console.log("button clicked fire base");
    });
  }

  testTsConfigJson(_x : any){

  }

}
