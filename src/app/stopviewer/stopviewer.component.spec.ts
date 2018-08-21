import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopviewerComponent } from './stopviewer.component';

describe('StopviewerComponent', () => {
  let component: StopviewerComponent;
  let fixture: ComponentFixture<StopviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
