import { TestBed, inject } from '@angular/core/testing';

import { AllstopsviewerService } from './allstopsviewer.service';

describe('AllstopsviewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllstopsviewerService]
    });
  });

  it('should be created', inject([AllstopsviewerService], (service: AllstopsviewerService) => {
    expect(service).toBeTruthy();
  }));
});
