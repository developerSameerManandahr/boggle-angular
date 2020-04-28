import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordBoxComponent} from './component/word-box/word-box.component';
import {AppComponent} from './app.component';
import {IntroComponent} from './component/intro/intro.component';


const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'play', component: WordBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
