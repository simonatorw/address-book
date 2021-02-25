import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    expect(typeof service.getData()).toEqual('object');
  });

  it('should sort a string array', () => {
    const sortedList = [{
      name: { last: 'Ralph' }
    }, {
      name: { last: 'Aldo' }
    }].sort(service.sortStr);
    expect(sortedList[0].name.last).toEqual('Aldo');
  });

});
