import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpeechData } from '../../data/speech-data-model';
import { sampleSpeeches } from '../../data/speech-data';
import { NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-add-new-speech',
  templateUrl: './add-new-speech.component.html',
  styleUrls: ['./add-new-speech.component.less']
})

export class AddNewSpeechComponent implements OnInit {

  private _success = new Subject<string>();
  public speechForm: FormGroup;
  public dateModel;
  successMessage: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private formBuilder: FormBuilder,
    calendar: NgbCalendar
  ) {
    this.dateModel = calendar.getToday();
    this.speechForm = this.formBuilder.group({
      speechTitle: ['', Validators.compose([Validators.required])],
      speechBody: ['', Validators.compose([Validators.required])],
      speechSubject: ['', Validators.compose([Validators.required])],
      // speechDate: ['', Validators.compose([Validators.required])],
      speechAuthor: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');
    this.renderer.addClass(this.el.nativeElement.querySelector('.saveSpeech'), 'notAllowed');

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }

  onKey(event){
    this.renderer.removeAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');
    this.renderer.removeClass(this.el.nativeElement.querySelector('.saveSpeech'), 'notAllowed');
  }

  onSubmit() {

    const speechTitle = this.speechForm.get('speechTitle').value;
    const speechBody = this.speechForm.get('speechBody').value;
    const speechSubject = this.speechForm.get('speechSubject').value;
    const speechAuthor = this.speechForm.get('speechAuthor').value;

    if (this.speechForm.status === 'VALID') {
      const newSpeech: SpeechData = {
        Title: speechTitle,
        Author: speechAuthor,
        SubjectArea: speechSubject,
        Body: speechBody,
        Date: this.dateModel
    }
      sampleSpeeches.push(newSpeech)
      this._success.next(`Speech successfully Saved.`);
      this.speechForm.reset();
    }else {
      if(speechTitle === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.title-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#speechTitle'), 'is-invalid');
      } else if (speechAuthor === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.author-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#speechAuthor'), 'is-invalid');
      } else if (speechBody === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.body-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#speechBody'), 'is-invalid');
      } else if (speechSubject === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.subject-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#speechSubject'), 'is-invalid');
      }
    }
    this.renderer.removeAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');
    this.renderer.removeClass(this.el.nativeElement.querySelector('.saveSpeech'), 'notAllowed');
  }

}
