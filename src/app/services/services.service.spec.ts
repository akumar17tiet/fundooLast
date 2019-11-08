import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConnectService } from './services.service';// earlier error inside the curly brackets

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: ConnectService = TestBed.get(ConnectService);
    expect(service).toBeTruthy();
  });
});
