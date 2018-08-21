import { TestBed, inject } from '@angular/core/testing';

import { AllroutesviewerService } from './allroutesviewer.service';

describe('AllroutesviewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllroutesviewerService]
    });
  });

  it('should be created', inject([AllroutesviewerService], (service: AllroutesviewerService) => {
    expect(service).toBeTruthy();
  }));
});
