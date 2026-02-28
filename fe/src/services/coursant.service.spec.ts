import { TestBed } from '@angular/core/testing';

import { CoursantService } from './coursant.service';

describe('CoursantService', () => {
  let service: CoursantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
