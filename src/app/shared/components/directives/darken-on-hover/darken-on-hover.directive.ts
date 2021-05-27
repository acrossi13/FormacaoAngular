import { Renderer } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnRoverDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('mouseover')
    darkenOn(){
        this.render.setStyle(this.el.nativeElement,'filter', 'brightness(70%)');
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement,'filter', 'brightness(100%)');
    }

}