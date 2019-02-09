import { TestBed } from '@angular/core/testing';

import { ApiEmployeeService } from './api-employee.service';

describe('ApiEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiEmployeeService = TestBed.get(ApiEmployeeService);
    expect(service).toBeTruthy();
  });
});
