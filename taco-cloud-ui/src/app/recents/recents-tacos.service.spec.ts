import { TestBed } from '@angular/core/testing';

import { RecentsTacosService } from './recents-tacos.service';

describe('RecentsTacosService', () => {
  let service: RecentsTacosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentsTacosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
