import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapviewer',
  templateUrl: './mapviewer.component.html',
  styleUrls: ['./mapviewer.component.css']
})
export class MapviewerComponent implements OnInit {
  lat: number = 53.891757;
  lng: number = 27.549973;
  selector: string;

  constructor() { }

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
}
