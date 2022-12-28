// import { LightBoxDirective } from './light-box.directive';
import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
   @Input() highLightedColor: string = "green";
  constructor(private elemRef: ElementRef) {
    elemRef.nativeElement.style.border = '1px black solid';


  }
  ngOnChanges(): void {

    this.elemRef.nativeElement.style.border = `4px ${this.highLightedColor} solid`;
    console.log(this.highLightedColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.elemRef.nativeElement.style.border = `4px ${this.highLightedColor} solid`;
  }
  @HostListener('click') onMouseClick() {
    this.elemRef.nativeElement.style.border = '3px red solid';

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elemRef.nativeElement.style.border = '3px olive solid';
  }

}
