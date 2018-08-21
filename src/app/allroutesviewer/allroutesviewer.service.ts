import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Route } from './route';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AllroutesviewerService {

  private routesStrUrl = 'http://localhost:3000/api/routesStr';
  private routesRevUrl = 'http://localhost:3000/api/routesRev';

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(this.routesStrUrl)
      .pipe(
      retry(3),
      catchError(this.handleError));
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + 
        `body was : ${error.error}`
      );
    }
    return throwError('Something bad happened: please try again later.');
  };
};