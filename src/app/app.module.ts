import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './component/letter-box/letter-box.component';
import { WordBoxComponent } from './component/word-box/word-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    WordBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
