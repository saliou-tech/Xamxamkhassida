import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { WordpressservicesService } from '../wordpressservices.service';

describe('WordpressservicesService', () => {
  let service: WordpressservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpressservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
