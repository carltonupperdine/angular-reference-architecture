import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { State, taskAdapter } from './task.state';

import { TaskViewModel } from 'src/app/tasks/shared/models';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading ?? false;

export const selectTaskState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('Tasks');

// eslint-disable-next-line no-unused-vars
export const selectAllTasks: (state: object) => TaskViewModel[] =
  taskAdapter.getSelectors(selectTaskState).selectAll;

export const selectTaskById = (id: number) =>
  createSelector(selectAllTasks, (allTasks: TaskViewModel[]) => {
    if (allTasks) {
      return allTasks.find((p) => p.id === id);
    } else {
      return null;
    }
  });

export const selectMyFeatureError: MemoizedSelector<object, any> =
  createSelector(selectTaskState, getError);

export const selectMyFeatureIsLoading: MemoizedSelector<object, boolean> =
  createSelector(selectTaskState, getIsLoading);
