import { Component, OnInit, Renderer2, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-view-my-speeches-body',
  templateUrl: './view-my-speeches-body.component.html',
  styleUrls: ['./view-my-speeches-body.component.less']
})

export class ViewMySpeechesBodyComponent implements OnInit {

  private _success = new Subject<string>();

  public speechForm: FormGroup;
  public isSubmitting = false;
  public notEdited = true;

  @Input() arrIndex;
  @Input() speechData;
  @Input() speechBody;
  @Output() newSpeechData: EventEmitter<any> = new EventEmitter();
  successMessage: string;


  @ViewChild('speechBody') body: ElementRef;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(3000)
    ).subscribe(() => this.successMessage = null);
  }

  onKey(event){
    this.renderer.removeAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');
  }

  onSubmit(f: NgForm){
    console.log(f.value,f.errors);

    if (f.valid) {
      this.speechBody.Author = f.value['speechAuthor'];
      this.speechBody.Body = f.value['speechBody'];
      this.speechBody.SubjectArea = f.value['speechSubjectArea'];
      this.speechBody.Date = f.value['speechDate'];
      this._success.next(`Speech successfully saved.`);
    } else {
      if (f.value['speechAuthor'] === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.author-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#authorInput'), 'is-invalid');
      } else if (f.value['speechBody'] === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.body-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#bodyText'), 'is-invalid');
      } else if (f.value['speechSubjectArea'] === '') {
        this.renderer.addClass(this.el.nativeElement.querySelector('.subject-helper'), 'show-feedback');
        this.renderer.addClass(this.el.nativeElement.querySelector('#subjectInput'), 'is-invalid');
      }
    }

    this.renderer.setAttribute(this.el.nativeElement.querySelector('.saveSpeech'), 'disabled', '');
  }

  deleteSpeech(){
    this.speechData.splice(this.arrIndex, 1);
    this.newSpeechData.emit(this.speechData);
    this._success.next(`Speech successfully deleted.`);
  }

  shareSpeech(){
    this._success.next(`Speech successfully shared.`);
  }

}
