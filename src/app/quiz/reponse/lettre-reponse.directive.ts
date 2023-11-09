import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLettreReponse]'
})
export class LettreReponseDirective implements OnInit {
  @Input('appLettreReponse') lettre!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const textNode = document.createTextNode(this.lettre + '. ');
    this.el.nativeElement.prepend(textNode);
  }
}
