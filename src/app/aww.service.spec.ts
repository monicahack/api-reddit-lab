import { TestBed } from '@angular/core/testing';

import { AwwService } from './aww.service';

describe('AwwService', () => {
  let service: AwwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
