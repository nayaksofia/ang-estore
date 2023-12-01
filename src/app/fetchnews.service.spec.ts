import { TestBed } from '@angular/core/testing';

import { FetchnewsService } from './fetchnews.service';

describe('FetchnewsService', () => {
  let service: FetchnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
