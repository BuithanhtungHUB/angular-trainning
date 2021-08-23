import { Injectable } from '@angular/core';
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    { key: 'dog', meaning: 'chó'},
    { key: 'cat', meaning: 'mèo'},
    { key: 'pig', meaning: 'lợn'},
    { key: 'chicken', meaning: 'gà'},
    { key: 'tiger', meaning: 'hổ'},
    { key: 'lion', meaning: 'sư tử'},
    { key: 'shark', meaning: 'cá mập'}
  ]
  constructor() { }
  getAll(): IWord[]{
    return this.words;
  }

  search(word: string): string{
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }
}
