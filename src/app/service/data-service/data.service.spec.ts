import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {UserScore} from '../../model/score';

describe('DataServiceService', () => {
  let service: DataService<UserScore>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
