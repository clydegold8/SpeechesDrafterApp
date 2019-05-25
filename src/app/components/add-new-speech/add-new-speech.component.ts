import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-speech',
  templateUrl: './add-new-speech.component.html',
  styleUrls: ['./add-new-speech.component.less']
})

export class AddNewSpeechComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void { }

}
