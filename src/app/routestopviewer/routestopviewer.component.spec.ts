import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutestopviewerComponent } from './routestopviewer.component';

describe('RoutestopviewerComponent', () => {
  let component: RoutestopviewerComponent;
  let fixture: ComponentFixture<RoutestopviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutestopviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutestopviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
