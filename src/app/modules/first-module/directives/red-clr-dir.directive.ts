import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedClrDir]',
})
export class RedClrDirDirective implements OnInit {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "Blue";
    this.el.nativeElement.style.backgroundColor = "green";
  }

  @Input() dirInput : string | undefined;

  @HostBinding('style.border') border!: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.highLight("100px");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highLight("10px");
  }

  ngOnInit(): void {
    console.log('appRedClrDir Directive initialized',this.el);
    console.log('directive input--->',this.dirInput);
    this.border = '15px solid black';

  }

  highLight(fontSize : string){
    this.el.nativeElement.style.fontSize  = fontSize;
  }
}
