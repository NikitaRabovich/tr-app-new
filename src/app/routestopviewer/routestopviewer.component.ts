import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';
import { Time } from '../getData/time';

@Component({
  selector: 'app-routestopviewer',
  templateUrl: './routestopviewer.component.html',
  styleUrls: ['./routestopviewer.component.css']
})
export class RoutestopviewerComponent implements OnInit {
  @Input() stop: Stop;
  time: Time;
  route: Route;

  constructor(
    private router: Router,
    private urlRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRouteStop();
    this.getRouteStopTimes();
    this.getRoute()
  }

  getRouteStop(): void {
    const routeId = +this.urlRoute.parent.snapshot.params['id'];
    const stopId = +this.urlRoute.snapshot.paramMap.get('id');
    console.log('url: ' + this.urlRoute.snapshot + ' routeId: ' + routeId + ' stopId: ' + stopId);
    this.getDataService.getRouteStop(routeId, stopId).subscribe(stop => this.stop = stop);
  }

  getRouteStopTimes(): void {
    const routeId = +this.urlRoute.parent.snapshot.params['id'];
    const stopId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getRouteStopTimes(routeId, stopId). subscribe(time => this.time = time);
  }

  getRoute(): void {
    const routeId = +this.urlRoute.parent.snapshot.params['id'];
    this.getDataService.getRoute(routeId).subscribe(route => this.route = route);
  }

  goBack(): void {
    this.location.back();
  }
}
