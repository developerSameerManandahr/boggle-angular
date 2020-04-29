import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import Spy = jasmine.Spy;
import {Score} from '../../model/score';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let spy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
