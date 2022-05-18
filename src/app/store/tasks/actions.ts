import { createAction, props } from '@ngrx/store';

import { Task } from 'src/app/tasks/task.model';

export enum ActionTypes {
  LOAD_TASKS_REQUESTED = '[Tasks] Load Tasks Requested',
  LOAD_TASKS_SUCCESS = '[Tasks] Load Tasks Success',
  TASK_COMPLETED = '[Tasks] Task Completed'
}

export const tasksLoadRequested = createAction(
  ActionTypes.LOAD_TASKS_REQUESTED
);

export const tasksLoaded = createAction(
  ActionTypes.LOAD_TASKS_SUCCESS,
  props<{ items: Task[] }>()
);

export const taskCompleted = createAction(
  ActionTypes.TASK_COMPLETED,
  props<{ id: number }>()
);
