import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(){

  }

  ngAfterViewInit(){}

  changeActive() {}
}
