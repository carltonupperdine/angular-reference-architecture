import { createAction, props } from '@ngrx/store';

import { Task } from 'src/app/tasks/task.model';

export enum ActionTypes {
  LOAD_TASKS_REQUESTED = '[Tasks] Load Tasks Requested',
  LOAD_TASKS_SUCCESS = '[Tasks] Load Tasks Success',
  TASK_COMPLETED = '[Tasks] Task Completed',
  TASK_UPDATED = '[Tasks] Task Updated',
  NEW_TASK = '[Tasks] New Task',
  TASK_CREATED = '[Tasks] Task Created'
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

export const taskUpdated = createAction(
  ActionTypes.TASK_UPDATED,
  props<{ task: Task }>()
);

export const newTask = createAction(
  ActionTypes.NEW_TASK,
  props<{ task: { title: string; description: string; due?: Date | null } }>()
);

export const taskCreated = createAction(
  ActionTypes.TASK_CREATED,
  props<{ task: Task }>()
);
