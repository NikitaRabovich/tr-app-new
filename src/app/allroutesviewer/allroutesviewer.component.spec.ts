import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllroutesviewerComponent } from './allroutesviewer.component';

describe('AllroutesviewerComponent', () => {
  let component: AllroutesviewerComponent;
  let fixture: ComponentFixture<AllroutesviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllroutesviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllroutesviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
