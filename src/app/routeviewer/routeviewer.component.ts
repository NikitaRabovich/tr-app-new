import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';
import { RouteStopIdList } from '../getData/routeStopIdList';

@Component({
  selector: 'app-routeviewer',
  templateUrl: './routeviewer.component.html',
  styleUrls: ['./routeviewer.component.css']
})
export class RouteviewerComponent implements OnInit {
  @Input() route: Route;
  list: RouteStopIdList;
  stops: Stop[] = [];
  data: any;

  constructor(
    private urlRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRoute();
    this.getRouteStops();
    this.getRouteStopIdList();
  }

  getRoute(): void {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRoute(routeId).subscribe(route => this.route = route);
  }

  getRouteStopIdList() {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    var list = this.getDataService.getRouteStopIdList(routeId);
    console.log(list)
  }

  getRouteStops(): void {
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRouteStops(routeId).subscribe(stops => this.stops = stops);
  }

  refresh(): void {
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
