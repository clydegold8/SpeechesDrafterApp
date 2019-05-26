import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/view-my-speeches/view-my-speeches.component';
import { AddNewSpeechComponent } from './components/add-new-speech/add-new-speech.component';
import { SearchAllSpeechesComponent } from './components/search-all-speeches/search-all-speeches.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'view-components', component: DashboardComponent},
  {path: 'add-new-speech', component: AddNewSpeechComponent},
  {path: 'search-all-speeches', component: SearchAllSpeechesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
