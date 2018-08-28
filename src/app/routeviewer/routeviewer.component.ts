import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';
import { Time } from '../getData/time';

@Component({
  selector: 'app-routeviewer',
  templateUrl: './routeviewer.component.html',
  styleUrls: ['./routeviewer.component.css']
})
export class RouteviewerComponent implements OnInit {
  @Input() route: Route;
  stops: Stop[] = [];
  times: Time[] = [];

  constructor(
    private urlRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRoute();
    this.getRouteStops();
    this.getRouteTimes();
  }

  getRoute(): void {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRoute(routeId).subscribe(route => this.route = route);
  }


  getRouteStops(): void {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRouteStops(routeId).subscribe(stops => this.stops = stops);
  }

  getRouteTimes(): void {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRouteTimes(routeId).subscribe(times => this.times = times);
  }

  refresh(): void {
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
