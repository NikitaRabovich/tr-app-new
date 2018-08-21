import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoprouteviewerComponent } from './stoprouteviewer.component';

describe('StoprouteviewerComponent', () => {
  let component: StoprouteviewerComponent;
  let fixture: ComponentFixture<StoprouteviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoprouteviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoprouteviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
