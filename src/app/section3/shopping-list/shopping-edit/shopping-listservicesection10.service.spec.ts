import { TestBed } from '@angular/core/testing';

import { ShoppingListservicesection10Service } from './shopping-listservicesection10.service';

describe('ShoppingListservicesection10Service', () => {
  let service: ShoppingListservicesection10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListservicesection10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
