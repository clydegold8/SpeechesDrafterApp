import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { sampleSpeeches } from '../../data/speech-data';
import { SearchPipe } from '../../pipes/search-speeches.pipe';

@Component({
  selector: 'app-search-all-speeches',
  templateUrl: './search-all-speeches.component.html',
  styleUrls: ['./search-all-speeches.component.less']
})

export class SearchAllSpeechesComponent implements OnInit {

  public searchData = sampleSpeeches;
  public query;
  public searchedSpeech = [];
  public hasResults = false;
  public noResults = false;

  constructor(
    private search: SearchPipe
  ) {}

  ngOnInit(): void { }

  searchSpeech(){
    const returnedSpeech = this.search.transform(this.searchData,'',this.query);
    if (returnedSpeech !== undefined) {
      this.searchedSpeech.push(returnedSpeech);
      this.hasResults = true;
      this.noResults = false;
    } else {
      this.noResults = true;
      this.hasResults = false;
    }
  }
}
