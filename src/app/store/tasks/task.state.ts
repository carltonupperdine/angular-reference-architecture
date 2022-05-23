import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { TaskViewModel } from 'src/app/tasks/shared/models';

export const taskAdapter: EntityAdapter<TaskViewModel> =
  createEntityAdapter<TaskViewModel>({
    selectId: (model) => model.id,
    sortComparer: (a: TaskViewModel, b: TaskViewModel): number =>
      b.id.toString().localeCompare(a.id.toString())
  });

export interface State extends EntityState<TaskViewModel> {
  tasks: TaskViewModel[];
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = taskAdapter.getInitialState({
  tasks: [],
  isLoading: false,
  error: null
});
