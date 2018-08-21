import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Stop } from '../getData/stop';
import { GetDataService } from '../getData/get-data.service';

@Component({
  selector: 'app-stop-search',
  templateUrl: './stop-search.component.html',
  styleUrls: ['./stop-search.component.css']
})
export class StopSearchComponent implements OnInit {

  allStops$: Observable<Stop[]>;
  private searchTerms$ = new Subject<string>();

  constructor(private searchSrevice: GetDataService) { }

  searchStops(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit(): void {
    this.allStops$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchSrevice.searchStops(term))
    );
  }
}
