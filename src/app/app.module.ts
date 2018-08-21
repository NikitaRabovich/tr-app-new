import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllroutesviewerComponent } from './allroutesviewer/allroutesviewer.component';
import { RouteviewerComponent } from './routeviewer/routeviewer.component';
import { RoutestopviewerComponent } from './routestopviewer/routestopviewer.component';
import { AllstopsviewerComponent } from './allstopsviewer/allstopsviewer.component';
import { StopviewerComponent } from './stopviewer/stopviewer.component';
import { StoprouteviewerComponent } from './stoprouteviewer/stoprouteviewer.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { GetDataService } from './getData/get-data.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { RouteSearchComponent } from './route-search/route-search.component';
import { StopSearchComponent } from './stop-search/stop-search.component';
import { SortPipeName } from './sort-pipe-name.pipe';
import { SortPipeNumber } from './sort-pipe-number.pipe';
import { convertTime } from './convert-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllroutesviewerComponent,
    RouteviewerComponent,
    RoutestopviewerComponent,
    AllstopsviewerComponent,
    StopviewerComponent,
    StoprouteviewerComponent,
    MessagesComponent,
    RouteSearchComponent,
    StopSearchComponent,
    SortPipeName,
    SortPipeNumber,
    convertTime
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ 
    GetDataService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
