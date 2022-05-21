import { TestBed } from '@angular/core/testing';

import { BookNookService } from './book-nook.service';

describe('BookNookService', () => {
  let service: BookNookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookNookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
