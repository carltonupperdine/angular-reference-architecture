import { TaskService } from './task.service';
import { TestBed } from '@angular/core/testing';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of tasks', () => {
    let tasks = service.getAll();
    expect(tasks.length).toBe(3);
  });
});
