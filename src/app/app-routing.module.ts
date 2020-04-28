import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BogglePlayComponent} from './component/boggle-play/boggle-play.component';
import {AppComponent} from './app.component';
import {IntroComponent} from './component/intro/intro.component';
import {ScoreComponent} from './component/score/score.component';


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'play', component: BogglePlayComponent},
  {path: 'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
