import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    StatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
