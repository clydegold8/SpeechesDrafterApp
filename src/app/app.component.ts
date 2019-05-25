import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  public changeActive(event) {
    const element = event.srcElement;
    const arrayofClasses = event.toElement.classList;
    const arrayOfNewClasses: Array<string> = [];

    for (const Elementclass of arrayofClasses) {
      arrayOfNewClasses.push(Elementclass);
    }

    if (!(arrayOfNewClasses.includes('active'))) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.active'), 'bg-secondary');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.active'), 'active');
      this.renderer.addClass(element, 'active');
      this.renderer.removeClass(element, 'bg-secondary');
    }
  }

}
