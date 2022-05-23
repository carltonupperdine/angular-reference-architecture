import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { TaskFacade } from '../store/tasks/task.facade';
import { TasksComponent } from './tasks.component';
import { TestBed } from '@angular/core/testing';

describe('TasksComponent', () => {
  let component: TasksComponent;

  beforeEach(async () => {
    const facadeMock = jest.mock<TaskFacade>('../store/tasks/task.facade');

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TasksComponent],
      providers: [
        provideMockStore(),
        MockStore,
        TasksComponent,
        { provide: TaskFacade, useValue: facadeMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    component = TestBed.inject(TasksComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
