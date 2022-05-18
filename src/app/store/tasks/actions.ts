import { createAction, props } from '@ngrx/store';

import { Task } from 'src/app/tasks/task.model';

export enum ActionTypes {
  LOAD_TASKS_SUCCESS = '[Tasks] Load Tasks Success'
}

export const tasksLoaded = createAction(
  ActionTypes.LOAD_TASKS_SUCCESS,
  props<{ items: Task[] }>()
);
