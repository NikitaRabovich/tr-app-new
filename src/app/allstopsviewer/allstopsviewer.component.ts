import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../getData/get-data.service';
import { Stop } from '../getData/stop';

@Component({
  selector: 'app-allstopsviewer',
  templateUrl: './allstopsviewer.component.html',
  styleUrls: ['./allstopsviewer.component.css']
})
export class AllstopsviewerComponent implements OnInit {

  error: any;
  headers: string[];
  allStops: Stop[];

  constructor(private getDataService: GetDataService) { }

  showStops(selectedType): void {
    this.getDataService.getStops(selectedType)
      .subscribe(allStops => this.allStops = allStops);
  }

  ngOnInit() {
    this.showStops(' ');
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
