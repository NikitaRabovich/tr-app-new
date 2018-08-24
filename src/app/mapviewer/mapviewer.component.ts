import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapviewer',
  templateUrl: './mapviewer.component.html',
  styleUrls: ['./mapviewer.component.css']
})
export class MapviewerComponent implements OnInit {
  lat: number = 53.891757;
  lng: number = 27.549973;

  constructor() { }

  ngOnInit() {
    
  }

}
