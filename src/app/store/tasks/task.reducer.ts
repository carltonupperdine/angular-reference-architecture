import * as TaskActions from './task.actions';

import { State, initialState, taskAdapter } from './task.state';
import { createReducer, on } from '@ngrx/store';

export const taskReducer = createReducer(
  initialState,
  on(
    TaskActions.tasksLoaded,
    (state, { items }): State => taskAdapter.setAll(items, { ...state })
  ),
  on(TaskActions.taskCompleted, (state, { id }) =>
    taskAdapter.updateOne({ id, changes: { complete: true } }, state)
  ),
  on(TaskActions.taskUpdated, (state, { task }) =>
    taskAdapter.updateOne({ id: task.id, changes: { ...task } }, state)
  ),
  on(TaskActions.taskCreated, (state, { task }) =>
    taskAdapter.addOne(task, state)
  )
);
