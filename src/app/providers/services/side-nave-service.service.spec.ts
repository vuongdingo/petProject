import { TestBed } from '@angular/core/testing';

import { TaskDetailSideNaveServiceService } from './task-details-side-nave-service.service';

describe('SideNaveServiceService', () => {
  let service: TaskDetailSideNaveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDetailSideNaveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
