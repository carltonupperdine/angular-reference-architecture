import * as TaskActions from './actions';

import { State, initialState, taskAdapter } from './state';
import { createReducer, on } from '@ngrx/store';

export const taskReducer = createReducer(
  initialState,
  on(
    TaskActions.tasksLoaded,
    (state, { items }): State => taskAdapter.setAll(items, { ...state })
  )
);
