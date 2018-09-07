import { Component, OnInit, Output } from '@angular/core';
import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';

@Component({
  selector: 'app-allroutesviewer',
  templateUrl: './allroutesviewer.component.html',
  styleUrls: ['./allroutesviewer.component.css'],
  providers: [GetDataService]
})
export class AllroutesviewerComponent implements OnInit {

  routes: Route[];
  stops: Stop[];

  constructor(private getDataService: GetDataService) { }

  showRoutes(selectedType): void {
    this.getDataService.getRoutes(selectedType)
      .subscribe(routes => this.routes = routes);
  }
  showStops(selectedType): void {
    this.getDataService.getStops(selectedType)
      .subscribe(stops => this.stops = stops);
  }

  ngOnInit() {
    this.showRoutes(' ');
    this.showStops(' ');
  }

  selectBus() {
    this.showRoutes('bus');
  }
  selectTram() {
    this.showRoutes('tram');
  }
  selectTrol() {
    this.showRoutes('trol');
  }
  selectUndr() {
    this.showRoutes('undr');
  };
  selectAll() {
    this.showRoutes(' ');
  }
}