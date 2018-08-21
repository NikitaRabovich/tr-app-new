import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteviewerComponent } from './routeviewer.component';

describe('RouteviewerComponent', () => {
  let component: RouteviewerComponent;
  let fixture: ComponentFixture<RouteviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
