import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  findSelector: string;

  constructor() { }

  ngOnInit() {
    this.findSelector = 'routes';
  }

  selectRoutes() {
    this.findSelector = 'routes';
  }
  selectStops() {
    this.findSelector = 'stops';
  }
}
