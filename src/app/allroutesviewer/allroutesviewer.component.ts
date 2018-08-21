import { Component, OnInit, Output } from '@angular/core';
import { GetDataService } from '../getData/get-data.service';
import { Route } from '../getData/route';

@Component({
  selector: 'app-allroutesviewer',
  templateUrl: './allroutesviewer.component.html',
  styleUrls: ['./allroutesviewer.component.css'],
  providers: [GetDataService]
})
export class AllroutesviewerComponent implements OnInit {

  error: any;
  headers: string[];
  routes: Route[];

  constructor(private getDataService: GetDataService) { }

  showRoutes(selectedType): void {
    this.getDataService.getRoutes(selectedType)
      .subscribe(routes => this.routes = routes);
  }

  ngOnInit() {
    this.showRoutes(' ');
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

//MAKE LIST OF TYPES, CLASS TYPES