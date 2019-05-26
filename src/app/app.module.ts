import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/view-my-speeches/view-my-speeches.component';
import { AddNewSpeechComponent } from './components/add-new-speech/add-new-speech.component';
import { SearchAllSpeechesComponent } from './components/search-all-speeches/search-all-speeches.component';
import { ViewMySpeechesBodyComponent } from './components/view-my-speeches/view-my-speeches-body/view-my-speeches-body.component';

import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddNewSpeechComponent,
    SearchAllSpeechesComponent,
    ViewMySpeechesBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
