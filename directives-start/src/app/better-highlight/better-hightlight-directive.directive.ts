import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor ;

  constructor(private elRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // @ts-ignore
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // @ts-ignore
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }

}
