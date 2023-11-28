import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-first-module-component',
  templateUrl: './first-module-component.component.html',
  styleUrls: ['./first-module-component.component.scss'],
})
export class FirstModuleComponentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: UserDataService, private element : ElementRef) {
    const resolverData = this.route.snapshot.data;
    // console.log("resolverData in component",resolverData['data']);
    // resolverData.subscribe({
    //   next : (value)=>{
    //   }
    // })
  }
  ngOnInit(): void {
    const userServiceData = this.service.getUserData();
    // console.log("userServiceData",userServiceData);

    // renderer
    console.log("element",this.element);
    this.element.nativeElement.style.backgroundColor = "blue";
    this.element.nativeElement.style.display = "inline-block";
    
  }
}
