import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Route } from '../getData/route';
import { GetDataService } from '../getData/get-data.service';

@Component({
  selector: 'app-route-search',
  templateUrl: './route-search.component.html',
  styleUrls: ['./route-search.component.css']
})
export class RouteSearchComponent implements OnInit {

  allRoutes$: Observable<Route[]>;
  private searchTerms$ = new Subject<string>();

  constructor(private searchSrevice: GetDataService) { }

  searchRoutes(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit(): void {
    this.allRoutes$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchSrevice.searchRoutes(term))
    );
  }
}
