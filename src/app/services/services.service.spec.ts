import { TestBed } from '@angular/core/testing';

import { ConnectService } from './services.service';// earlier error inside the curly brackets

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectService = TestBed.get(ConnectService);
    expect(service).toBeTruthy();
  });
});
