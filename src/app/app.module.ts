import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './component/letter-box/letter-box.component';
import { WordBoxComponent } from './component/word-box/word-box.component';
import {FormsModule} from '@angular/forms';
import { IntroComponent } from './component/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    WordBoxComponent,
    IntroComponent
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
