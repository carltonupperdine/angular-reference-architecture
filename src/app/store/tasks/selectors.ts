import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { State, taskAdapter } from './state';

import { Task } from 'src/app/tasks/task.model';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading ?? false;

export const selectTaskState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('Tasks');

// eslint-disable-next-line no-unused-vars
export const selectAllTasks: (state: object) => Task[] =
  taskAdapter.getSelectors(selectTaskState).selectAll;

export const selectTaskById = (id: number) =>
  createSelector(selectAllTasks, (allTasks: Task[]) => {
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
