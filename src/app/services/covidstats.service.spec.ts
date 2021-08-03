import { TestBed } from '@angular/core/testing';

import { CovidstatsService } from './covidstats.service';

describe('CovidstatsService', () => {
  let service: CovidstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
