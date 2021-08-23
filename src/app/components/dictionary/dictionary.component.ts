import { Component, OnInit } from '@angular/core';
import {IWord} from "../../iword";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  // @ts-ignore
  word: IWord;

  constructor(
    private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  search(word: string) {
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }

}
