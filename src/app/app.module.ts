import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './component/letter-box/letter-box.component';
import { BogglePlayComponent } from './component/boggle-play/boggle-play.component';
import {FormsModule} from '@angular/forms';
import { IntroComponent } from './component/intro/intro.component';
import { TimerComponent } from './component/timer/timer.component';
import { ScoreComponent } from './component/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    BogglePlayComponent,
    IntroComponent,
    TimerComponent,
    ScoreComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
