import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";
import {IWord} from "../../iword";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  // @ts-ignore
  sub: Subscription;
  // @ts-ignore
  word: IWord;

  constructor(private activedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.sub = this.activedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const key: any = paramMap. get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key: key, meaning: meaning};
    });
    console.log(this.sub);
    // const {snapshot} = this.activedRoute;
    // const key: any = snapshot.paramMap.get('key');
    // const meaning = this.dictionaryService.search(key);
    // this.word = {key: key, meaning: meaning};
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
