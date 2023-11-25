import { TestBed } from '@angular/core/testing';

import { FirstModuleServiceService } from './first-module-service.service';

describe('FirstModuleServiceService', () => {
  let service: FirstModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
