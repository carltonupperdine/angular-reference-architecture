import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Task } from 'src/app/tasks/task.model';

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (model) => model.id,
  sortComparer: (a: Task, b: Task): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Task> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = taskAdapter.getInitialState({
  isLoading: false,
  error: null
});
