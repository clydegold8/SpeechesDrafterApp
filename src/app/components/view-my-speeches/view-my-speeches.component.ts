import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { sampleSpeeches } from '../../data/speech-data';

@Component({
  selector: 'app-view-my-speeches',
  templateUrl: './view-my-speeches.component.html',
  styleUrls: ['./view-my-speeches.component.less']
})

export class DashboardComponent implements OnInit, AfterViewInit {


  public indexTab;
  public indexTabContent;
  public sampleSpeechesData = sampleSpeeches;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(){
    this.indexTabContent = sampleSpeeches[0];
   }

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement.querySelector('.speechTitle0'), 'active');
    this.renderer.addClass(this.el.nativeElement.querySelector('.icon0'), 'show');
  }

  changeTab(event) {
    const element = event.srcElement;
    const arrayofClasses = event.toElement.classList;
    const arrayOfNewClasses: Array<string> = [];


    for (const Elementclass of arrayofClasses) {
      arrayOfNewClasses.push(Elementclass);
    }

    this.indexTab = arrayOfNewClasses[4];
    this.indexTabContent = sampleSpeeches[this.indexTab];

    if (!(arrayOfNewClasses.includes('active'))) {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.show'), 'show');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.active'), 'active');
      this.renderer.addClass(element, 'active');
      this.renderer.addClass(element.querySelector('.fas'), 'show');
    }
  }

  onDelete(event) {
    this.indexTabContent = event[0];
  }

}
