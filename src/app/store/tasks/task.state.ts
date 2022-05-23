import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import { Task } from 'src/app/tasks/shared/models';

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (model) => model.id,
  sortComparer: (a: Task, b: Task): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Task> {
  tasks: Task[];
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = taskAdapter.getInitialState({
  tasks: [],
  isLoading: false,
  error: null
});
