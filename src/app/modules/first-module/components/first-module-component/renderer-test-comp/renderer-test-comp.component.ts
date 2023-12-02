import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, forkJoin, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-renderer-test-comp',
  templateUrl: './renderer-test-comp.component.html',
  styleUrls: ['./renderer-test-comp.component.scss'],
})
export class RendererTestCompComponent implements OnDestroy{
  $time!: Observable<Date>;
  $one!: Observable<String>;
  $two!: Observable<String>;
  $three!: Observable<String>;
  $four!: Observable<String>;
  $forkJoinData !: Subscription;


  one!: string;

  ngOnInit() {
    this.$time = interval(1000).pipe(map(() => new Date()));

    //fork join
    this.$one = of('one');
    this.$two = of('two');
    this.$three = of('three');
    this.$four = of('four');
    this.forkJoinTest();
    this.testGreaterThan(0);
  }

  

  testGreaterThan(val : number) {
    debugger
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 0) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }

  forkJoinTest() {
   this.$forkJoinData =  forkJoin([this.$one, this.$two, this.$three, this.$four]).subscribe({
      next: (value) => {
        this.one = value[0].toString();
      },
      complete() {
        console.log('Complete Forkjoin');
      },
      error: (error) => {},
    });
  }

  ngOnDestroy(){
    this.$forkJoinData.unsubscribe();
  }
}



