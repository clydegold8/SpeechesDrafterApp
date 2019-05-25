import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-my-speeches',
  templateUrl: './view-my-speeches.component.html',
  styleUrls: ['./view-my-speeches.component.less']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  public sampleSpeeches = [
    {
      Title: ' Speech1',
      Author: 'Clyde Ian',
      SubjectArea : 'Politics',
      Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non interdum nisi. In sit amet eros ut ipsum porttitor dapibus. Proin eu vestibulum tortor. Duis et massa non dui commodo molestie. Pellentesque efficitur, odio eget dictum fermentum, libero arcu finibus enim, vel commodo ex orci ut elit. Aenean nisi turpis, rhoncus aliquet sem quis, fermentum hendrerit diam. Maecenas dictum quis lectus consequat laoreet. Mauris volutpat velit ut sollicitudin dapibus.'
    },
    {
      Title: ' Speech2',
      Author: 'Clyde Ian 2',
      SubjectArea : 'Politics2',
      Body: 'eee Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non interdum nisi. In sit amet eros ut ipsum porttitor dapibus. Proin eu vestibulum tortor. Duis et massa non dui commodo molestie. Pellentesque efficitur, odio eget dictum fermentum, libero arcu finibus enim, vel commodo ex orci ut elit. Aenean nisi turpis, rhoncus aliquet sem quis, fermentum hendrerit diam. Maecenas dictum quis lectus consequat laoreet. Mauris volutpat velit ut sollicitudin dapibus.'
    }
  ]

  public indexTab;
  public indexTabContent;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(){
    this.indexTabContent = this.sampleSpeeches[0];
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
    this.indexTabContent = this.sampleSpeeches[this.indexTab];

    console.log(this.indexTab,this.indexTabContent,element.querySelector('.fas'))

    if (!(arrayOfNewClasses.includes('active'))) {
      this.renderer.removeClass(this.el.nativeElement.querySelector('.show'), 'show');
      this.renderer.removeClass(this.el.nativeElement.querySelector('.active'), 'active');
      this.renderer.addClass(element, 'active');
      this.renderer.addClass(element.querySelector('.fas'), 'show');
    }
  }

}
