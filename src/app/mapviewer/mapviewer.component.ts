import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { } from '@types/googlemaps';
import { Stop } from '../getData/stop';
import { Route } from '../getData/route';

@Component({
  selector: 'app-mapviewer',
  templateUrl: './mapviewer.component.html',
  styleUrls: ['./mapviewer.component.css']
})
export class MapviewerComponent implements OnInit {
  lat: number = 53.891757;
  lng: number = 27.549973;
  selector: string;
  @Input() singleStop: Stop;
  @Input() stops: Stop[];
  @Input() singleRoute: Route;
  @Input() routes: Route[];
  @Input() routeLat: Route['lat'];
  @Input() routeLng: Route['lng'];
  stopIcon = 'http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png';

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.selector = "find";
  }

  selectFind() {
    this.selector = "find";
    console.log("switched to Find");
  }
  selectLay() {
    this.selector = "lay";
    console.log("switched to Lay");
  }

  goToStop(id): void {
    this.location.go('stops/' + id);
    window.location.reload();
  }
}
