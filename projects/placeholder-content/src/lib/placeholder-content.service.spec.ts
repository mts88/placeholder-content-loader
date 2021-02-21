import { TestBed } from '@angular/core/testing';

import { PlaceholderContentService } from './placeholder-content.service';

describe('PlaceholderContentService', () => {
  let service: PlaceholderContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
