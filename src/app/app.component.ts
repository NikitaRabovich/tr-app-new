import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GetDataService } from './getData/get-data.service';
import { registerLocaleData } from '@angular/common';
//import localeRu from '@angular/common/locales/extra/ru-BY';

//registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [GetDataService]
})
export class AppComponent {
  title = 'Minsk Transport';
  get currentTime() : string { return Date(); }
    constructor(cd: ChangeDetectorRef) {
        setInterval(function() { cd.detectChanges(); }, 10000);
    }
}