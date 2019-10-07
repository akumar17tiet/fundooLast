import { TestBed } from '@angular/core/testing';

import { Notes.ServicesService } from './notes.services.service';

describe('Notes.ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Notes.ServicesService = TestBed.get(Notes.ServicesService);
    expect(service).toBeTruthy();
  });
});
