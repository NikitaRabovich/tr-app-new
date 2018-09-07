import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';
import { Stop } from '../getData/stop';

@Component({
  selector: 'app-allstopsviewer',
  templateUrl: './allstopsviewer.component.html',
  styleUrls: ['./allstopsviewer.component.css']
})
export class AllstopsviewerComponent implements OnInit {

  stops: Stop[];
  routes: Route[];

  constructor(private getDataService: GetDataService) { }

  showStops(selectedType): void {
    this.getDataService.getStops(selectedType)
      .subscribe(stops => this.stops = stops);
  }
  showRoutes(selectedType): void {
    this.getDataService.getRoutes(selectedType)
      .subscribe(routes => this.routes = routes);
  }

  ngOnInit() {
    this.showStops(' ');
    this.showRoutes(' ');
  };

  selectBus() {
    this.showStops('bus');
  }
  selectTram() {
    this.showStops('tram');
  }
  selectTrol() {
    this.showStops('trol');
  }
  selectUndr() {
    this.showStops('undr');
  };
  selectAll() {
    this.showStops(' ');
  }
}
