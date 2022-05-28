import { TestBed } from '@angular/core/testing';

import { MyCartCountService } from './my-cart-count.service';

describe('MyCartCountService', () => {
  let service: MyCartCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCartCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
