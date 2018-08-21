import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { Route } from './route';
import { Stop } from './stop';
import { Time } from './time';
import { RouteStopIdList } from './routeStopIdList';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private routesUrl   = 'https://tr-app-lb.appspot.com/api/routes';
  private stopsUrl    = 'https://tr-app-lb.appspot.com/api/stops';
  private handleError: HandleError;


  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('GetDataService');
  }

  getRoutes(selectedType: string): Observable<Route[]> { //
    console.log(selectedType);
    return this.http.get<Route[]>(`${this.routesUrl}?filter[where][direction]=0&filter[where][type][like]=${selectedType}`)
      .pipe(
        retry(3),
        catchError(this.handleError('getRoutes', []))
      );
  };
  getRoute(id: number): Observable<Route> {
    const url = `${this.routesUrl}/${id}`;
    return this.http.get<Route>(url).pipe(
      tap(_ => console.log(`fetched route id=${id}`)),
    catchError(this.handleError<Route>(`getRoute id=${id}`))
    );
  };
  getRouteStopIdList(id: number) {
    const url = `${this.routesUrl}/${id}?filter[fields][stopId]=true`;
    return this.http.get(url);
  };
  getRouteStops(id: number): Observable<Route['stops']> {
    const url = `${this.routesUrl}/${id}/stops/`;
    return this.http.get<Route['stops']>(url).pipe(
      tap(data => console.log(`fetched route ${id} stops`)),
      catchError(this.handleError<Route['stops']>(`getRoute id=${id}`))
    )  
  };
  getRouteStop(routeId: number, stopId: number): Observable<Stop> {
    const url = `${this.routesUrl}/${routeId}/stops/${stopId}`;
    return this.http.get<Stop>(url).pipe(
      tap(_ => console.log(`fetched route ${routeId} Stop id=${stopId}`)),
    catchError(this.handleError<Stop>(`getStop id=${stopId}`))
    );
  };
  getRouteStopTimes(routeId: number, stopId: number): Observable<Time> {
    const url = `${this.routesUrl}/${routeId}/stops/${stopId}/times/r${routeId}s${stopId}`;
    return this.http.get<Time>(url).pipe(
      tap(_ => console.log(`fetched times r${routeId}s${stopId}`)),
    catchError(this.handleError<Time>(`getTime r${routeId}s${stopId}`))
    );
  };

  getStops(selectedType: string): Observable<Stop[]> {
    return this.http.get<Stop[]>(`${this.stopsUrl}?filter[where][direction]=0&filter[where][type][like]=${selectedType}`)
      .pipe(
        retry(3),
        catchError(this.handleError('getStops', []))
      );
  };
  getStop(id: number): Observable<Stop> {
    const url = `${this.stopsUrl}/${id}`;
    return this.http.get<Stop>(url).pipe(
      tap(_ => console.log(`fetched stop id=${id}`)),
    catchError(this.handleError<Stop>(`getStop id=${id}`))
    );
  };
  getStopRoutes(id: number): Observable<Stop['routes']> {
    const url = `${this.stopsUrl}/${id}/routes/`;
    return this.http.get<Stop['routes']>(url).pipe(
      tap(_ => console.log(`fetched stopRoutes id=${id}`)),
    catchError(this.handleError<Stop['routes']>(`getStopRoutes id=${id}`))
    );
  };
  getStopRoute(routeId: number, stopId: number): Observable<Route> {
    const url = `${this.stopsUrl}/${stopId}/routes/${routeId}`;
    return this.http.get<Route>(url).pipe(
      tap(_ => console.log(`fetched stop ${stopId} Route id=${routeId}`)),
    catchError(this.handleError<Route>(`getRoute id=${routeId}`))
    );
  };
  getStopRouteTimes(routeId: number, stopId: number): Observable<Time> {
    const url = `${this.stopsUrl}/${stopId}/routes/${routeId}/times/r${routeId}s${stopId}`;
    return this.http.get<Time>(url).pipe(
      tap(_ => console.log(`fetched times r${routeId}s${stopId}`)),
    catchError(this.handleError<Time>(`getTime r${routeId}s${stopId}`))
    );
  };

  searchRoutes(term: string, refresh = false): Observable<Route[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Route[]>
      (`${this.routesUrl}?filter[where][number][like]=${term}&filter[where][direction]=0`)
      .pipe(
        catchError(this.handleError('searchRoutes', []))
      );
  }

  searchStops(term: string, refresh = false): Observable<Stop[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Stop[]>
      (`${this.stopsUrl}?filter={"where":{"name":{"regexp":"/${term}/i"}}}`)
      .pipe(
        catchError(this.handleError('searchStops', []))
      );
  }
}
