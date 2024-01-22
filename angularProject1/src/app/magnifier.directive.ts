import { Directive, HostBinding, HostListener } from '@angular/core';

// pretty similar to a component, except this doesn't have any html template or css styles
// instead, this directive is used as an attribute on an html element

@Directive({
  selector: '[appMagnifier]'
})


export class MagnifierDirective {

  // constructor() { }

  //this directive will modify the width of an img element
  //@HostBinding decorator to bind the host elements width
  // @HostBinding('width') width = 200;

  // @HostListener('mouseenter',['$event'])
  // onHover(e){ //idk what e is
  //   this.width = 300; 
  // }


}
