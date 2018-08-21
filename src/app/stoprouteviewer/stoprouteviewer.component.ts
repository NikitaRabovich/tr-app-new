import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';
import { Time } from '../getData/time';

@Component({
  selector: 'app-StopRouteviewer',
  templateUrl: './StopRouteviewer.component.html',
  styleUrls: ['./StopRouteviewer.component.css']
})
export class StoprouteviewerComponent implements OnInit {
  @Input()route: Route;
  time: Time;
  stop: Stop;

  constructor(
    private router: Router,
    private urlRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStopRoute();
    this.getStopRouteTimes();
    this.getStop()
  }

  getStopRoute(): void {
    const stopId = +this.urlRoute.parent.snapshot.params['id'];
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    console.log('url: ' + this.urlRoute.snapshot + ' routeId: ' + routeId + ' stopId: ' + stopId);
    this.getDataService.getStopRoute(routeId, stopId).subscribe(route => this.route = route);
  }

  getStopRouteTimes(): void {
    const stopId = +this.urlRoute.parent.snapshot.params['id'];
    const routeId = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getStopRouteTimes(routeId, stopId). subscribe(time => this.time = time);
  }

  getStop(): void {
    const stopId = +this.urlRoute.parent.snapshot.params['id'];
    this.getDataService.getStop(stopId).subscribe(stop => this.stop = stop);
  }

  goBack(): void {
    this.location.back();
  }
}
