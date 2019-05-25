import { Component, OnInit, Renderer2, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-my-speeches-body',
  templateUrl: './view-my-speeches-body.component.html',
  styleUrls: ['./view-my-speeches-body.component.less']
})

export class ViewMySpeechesBodyComponent implements OnInit {


  @Input() speechData;
  @Input() speechBody;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(){}


}
