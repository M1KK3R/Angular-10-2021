import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicHeightDirective]',
})
export class DynamicHeightDirectiveDirective {
  constructor(public element: ElementRef) {}

  @HostListener('input', ['$event.target'])
  adjust() {
    let textArea = this.element.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
