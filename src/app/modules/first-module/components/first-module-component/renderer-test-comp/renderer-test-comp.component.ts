import { Component } from '@angular/core';
import { Observable, forkJoin, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-renderer-test-comp',
  templateUrl: './renderer-test-comp.component.html',
  styleUrls: ['./renderer-test-comp.component.scss'],
})
export class RendererTestCompComponent {
  $time!: Observable<Date>;
  $one!: Observable<String>;
  $two!: Observable<String>;
  $three!: Observable<String>;
  $four!: Observable<String>;

  one!: string;

  ngOnInit() {
    this.$time = interval(1000).pipe(map(() => new Date()));

    //fork join
    this.$one = of('one');
    this.$two = of('two');
    this.$three = of('three');
    this.$four = of('four');
    this.forkJoinTest();
  }

  forkJoinTest() {
    forkJoin([this.$one, this.$two, this.$three, this.$four]).subscribe({
      next: (value) => {
        this.one = value[0].toString();
      },
      complete() {
        console.log('Complete Forkjoin');
      },
      error: (error) => {},
    });
  }
}
