import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[box]'
})
/**
 * Box Directives created 
 */
export class BoxDirective implements OnInit {

  /**
   * 
   */
  @Input()
  box:string;

  /**
   * 
   */
  @Input()
  boxStyle:string;

  /**
   * 
   */
  @Input()
  boxColor:string;
 
  /**
   * 
   * @param el 
   * @param renderer 
   */
  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  
  /**
   * 
   */
  ngOnInit(){
     this.renderer.setElementStyle(this.el.nativeElement, 'border', `${this.box} ${this.boxStyle} ${this.boxColor}`); 
  }

}
