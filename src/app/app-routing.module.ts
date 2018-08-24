import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllroutesviewerComponent } from './allroutesviewer/allroutesviewer.component';
import { AllstopsviewerComponent } from './allstopsviewer/allstopsviewer.component';
import { RouteviewerComponent } from './routeviewer/routeviewer.component';
import { StopviewerComponent } from './stopviewer/stopviewer.component';
import { RoutestopviewerComponent } from './routestopviewer/routestopviewer.component';
import { MapviewerComponent } from './mapviewer/mapviewer.component';

const routeRoutes: Routes = [
  { path: 'stop/:stopId', component: RoutestopviewerComponent }
]

const routes: Routes = [
  { path: '', redirectTo: 'routes', pathMatch: 'full' },
  { path: 'routes', children: [
    { path: '', component: AllroutesviewerComponent },
    { path: ':id', children: [
      { path: '', component: RouteviewerComponent },
      { path: 'stops', children: [
        { path: '', redirectTo: 'routes/:id', pathMatch: 'full' },
        { path: ':id', component: RoutestopviewerComponent }
      ] }
    ] }
  ] },
  { path: 'stops', children: [
    { path: '', component: AllstopsviewerComponent },
    { path: ':id', children: [
      { path: '', component: StopviewerComponent },
      { path: 'routes', children: [
        {path: '', redirectTo: 'stops/:id', pathMatch: 'full' }
      ] }
    ] }
  ] },
  { path: 'map', children: [
    { path: '', component: MapviewerComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routeRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
