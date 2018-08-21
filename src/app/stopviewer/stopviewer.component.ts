import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';
import { stopRoutes } from '../getData/stopRoutes';

@Component({
  selector: 'app-stopviewer',
  templateUrl: './stopviewer.component.html',
  styleUrls: ['./stopviewer.component.css']
})
export class StopviewerComponent implements OnInit {
  @Input() stop: Stop;
  routes: Route[] = [];

  constructor(
    private router: Router,
    private urlRoute: ActivatedRoute,
    private getDataService: GetDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStop();
    this.getStopRoutes();
  }

  getStop(): void {
    const id = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getStop(id).subscribe(stop => this.stop = stop);
  }

  getStopRoutes(): void {
    const id = +this.urlRoute.snapshot.paramMap.get('id');
    this.getDataService.getStopRoutes(id).subscribe(routes => this.routes = routes);
  }

  refresh(): void {
    window.location.reload();
  }

  goBack(): void {
    this.location.back();
  }
}
