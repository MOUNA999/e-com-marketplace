import { TestBed } from '@angular/core/testing';

import { CategorieSerivceService } from '../categorie-serivce.service';

describe('CategorieSerivceService', () => {
  let service: CategorieSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
