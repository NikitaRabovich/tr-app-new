import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstopsviewerComponent } from './allstopsviewer.component';

describe('AllstopsviewerComponent', () => {
  let component: AllstopsviewerComponent;
  let fixture: ComponentFixture<AllstopsviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllstopsviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstopsviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
