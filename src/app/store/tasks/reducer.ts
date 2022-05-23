import * as TaskActions from './actions';

import { State, initialState, taskAdapter } from './state';
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
  )
);
