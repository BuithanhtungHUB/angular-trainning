import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TimelinesComponent } from './components/timelines/timelines.component';
import {DictionaryService} from "./service/dictionary.service";
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { DictionaryPageComponent } from './components/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './components/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
