import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-all-speeches',
  templateUrl: './search-all-speeches.component.html',
  styleUrls: ['./search-all-speeches.component.less']
})

export class SearchAllSpeechesComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void { }
}
